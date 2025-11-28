// API client configuration and utilities

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface ApiError {
    error: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
}

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private getAuthHeaders(): HeadersInit {
        const token = this.getAccessToken();
        return {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };
    }

    private getAccessToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('accessToken');
    }

    private setTokens(accessToken: string, refreshToken: string): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }

    private clearTokens(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    }

    async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = this.getAuthHeaders();

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    ...headers,
                    ...options.headers,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw data as ApiError;
            }

            return data as T;
        } catch (error) {
            throw error;
        }
    }

    // Authentication endpoints
    async register(userData: {
        email: string;
        phone: string;
        password: string;
        firstName: string;
        lastName: string;
        role: 'student' | 'owner' | 'admin' | 'parent';
    }) {
        const response = await this.request<{
            message: string;
            user: any;
            accessToken: string;
            refreshToken: string;
        }>('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });

        this.setTokens(response.accessToken, response.refreshToken);
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(response.user));
        }

        return response;
    }

    async login(credentials: { emailOrPhone: string; password: string }) {
        const response = await this.request<{
            message: string;
            user: any;
            accessToken: string;
            refreshToken: string;
        }>('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });

        this.setTokens(response.accessToken, response.refreshToken);
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(response.user));
        }

        return response;
    }

    async logout() {
        try {
            await this.request('/api/auth/logout', {
                method: 'POST',
            });
        } finally {
            this.clearTokens();
        }
    }

    async refreshToken() {
        if (typeof window === 'undefined') return null;

        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return null;

        try {
            const response = await this.request<{
                accessToken: string;
                refreshToken: string;
            }>('/api/auth/refresh', {
                method: 'POST',
                body: JSON.stringify({ refreshToken }),
            });

            this.setTokens(response.accessToken, response.refreshToken);
            return response;
        } catch (error) {
            this.clearTokens();
            throw error;
        }
    }

    async getCurrentUser() {
        return this.request<{ user: any }>('/api/auth/me');
    }

    isAuthenticated(): boolean {
        return !!this.getAccessToken();
    }

    getStoredUser(): any | null {
        if (typeof window === 'undefined') return null;
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }
}

export const apiClient = new ApiClient(API_URL);
export type { ApiError };
