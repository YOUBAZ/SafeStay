'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient, ApiError } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    role: 'student' | 'owner' | 'admin' | 'parent';
    avatarUrl?: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (emailOrPhone: string, password: string) => Promise<void>;
    register: (userData: {
        email: string;
        phone: string;
        password: string;
        firstName: string;
        lastName: string;
        role: 'student' | 'owner' | 'admin' | 'parent';
    }) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = apiClient.getStoredUser();
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const login = async (emailOrPhone: string, password: string) => {
        try {
            setLoading(true);
            setError(null);

            const response = await apiClient.login({ emailOrPhone, password });
            setUser(response.user);

            router.push('/'); // Redirect to home page after login
        } catch (err) {
            const apiError = err as ApiError;
            setError(apiError.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData: {
        email: string;
        phone: string;
        password: string;
        firstName: string;
        lastName: string;
        role: 'student' | 'owner' | 'admin' | 'parent';
    }) => {
        try {
            setLoading(true);
            setError(null);

            const response = await apiClient.register(userData);
            setUser(response.user);

            router.push('/'); // Redirect to home page after registration
        } catch (err) {
            const apiError = err as ApiError;
            setError(apiError.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await apiClient.logout();
            setUser(null);
            router.push('/login');
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                login,
                register,
                logout,
                clearError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Higher-order component for protected routes
export function withAuth<P extends object>(
    Component: React.ComponentType<P>
): React.FC<P> {
    return function ProtectedRoute(props: P) {
        const { user, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            }
        }, [user, loading, router]);

        if (loading) {
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading...</p>
                    </div>
                </div>
            );
        }

        if (!user) {
            return null;
        }

        return <Component {...props} />;
    };
}
