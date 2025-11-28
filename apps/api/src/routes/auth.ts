import { Router } from 'express';
import { z } from 'zod';
import prisma from '../utils/db';
import { hashPassword, comparePassword, generateTokens, verifyRefreshToken } from '../utils/authUtils';
import { authenticate, AuthRequest } from '../middleware/authMiddleware';

const router = Router();

// Validation schemas
const registerSchema = z.object({
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    role: z.enum(['student', 'owner', 'admin', 'parent'], {
        errorMap: () => ({ message: 'Role must be one of: student, owner, admin, parent' })
    }),
});

const loginSchema = z.object({
    emailOrPhone: z.string().min(1, 'Email or phone is required'),
    password: z.string().min(1, 'Password is required'),
});

const refreshTokenSchema = z.object({
    refreshToken: z.string().min(1, 'Refresh token is required'),
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        // Validate input
        const validatedData = registerSchema.parse(req.body);

        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: validatedData.email },
                    { phone: validatedData.phone }
                ]
            }
        });

        if (existingUser) {
            if (existingUser.email === validatedData.email) {
                return res.status(400).json({
                    error: 'Registration failed',
                    message: 'Email already registered'
                });
            }
            if (existingUser.phone === validatedData.phone) {
                return res.status(400).json({
                    error: 'Registration failed',
                    message: 'Phone number already registered'
                });
            }
        }

        // Hash password
        const passwordHash = await hashPassword(validatedData.password);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: validatedData.email,
                phone: validatedData.phone,
                passwordHash,
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
                role: validatedData.role,
            },
            select: {
                id: true,
                email: true,
                phone: true,
                firstName: true,
                lastName: true,
                role: true,
                isEmailVerified: true,
                isPhoneVerified: true,
                createdAt: true,
            }
        });

        // Generate tokens
        const tokens = generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        res.status(201).json({
            message: 'Registration successful',
            user,
            ...tokens,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        }

        console.error('Registration error:', error);
        res.status(500).json({
            error: 'Registration failed',
            message: 'An error occurred during registration'
        });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        // Validate input
        const validatedData = loginSchema.parse(req.body);

        // Find user by email or phone
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: validatedData.emailOrPhone },
                    { phone: validatedData.emailOrPhone }
                ]
            }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Login failed',
                message: 'Invalid credentials'
            });
        }

        // Check if user is active
        if (!user.isActive) {
            return res.status(403).json({
                error: 'Login failed',
                message: 'Account is deactivated. Please contact support.'
            });
        }

        // Verify password
        const isPasswordValid = await comparePassword(validatedData.password, user.passwordHash);

        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Login failed',
                message: 'Invalid credentials'
            });
        }

        // Update last login
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });

        // Generate tokens
        const tokens = generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                avatarUrl: user.avatarUrl,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified,
            },
            ...tokens,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        }

        console.error('Login error:', error);
        res.status(500).json({
            error: 'Login failed',
            message: 'An error occurred during login'
        });
    }
});

// POST /api/auth/refresh
router.post('/refresh', async (req, res) => {
    try {
        // Validate input
        const validatedData = refreshTokenSchema.parse(req.body);

        // Verify refresh token
        const decoded = verifyRefreshToken(validatedData.refreshToken);

        if (!decoded) {
            return res.status(401).json({
                error: 'Token refresh failed',
                message: 'Invalid or expired refresh token'
            });
        }

        // Verify user still exists and is active
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!user || !user.isActive) {
            return res.status(401).json({
                error: 'Token refresh failed',
                message: 'User not found or inactive'
            });
        }

        // Generate new tokens
        const tokens = generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        res.status(200).json({
            message: 'Token refreshed successfully',
            ...tokens,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        }

        console.error('Token refresh error:', error);
        res.status(500).json({
            error: 'Token refresh failed',
            message: 'An error occurred while refreshing token'
        });
    }
});

// POST /api/auth/logout
router.post('/logout', authenticate, async (req: AuthRequest, res) => {
    try {
        // In a stateless JWT setup, logout is handled client-side by removing tokens
        // For added security, you could implement a token blacklist here

        res.status(200).json({
            message: 'Logout successful'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            error: 'Logout failed',
            message: 'An error occurred during logout'
        });
    }
});

// GET /api/auth/me - Get current user info
router.get('/me', authenticate, async (req: AuthRequest, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                error: 'Authentication required'
            });
        }

        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            select: {
                id: true,
                email: true,
                phone: true,
                firstName: true,
                lastName: true,
                role: true,
                avatarUrl: true,
                isEmailVerified: true,
                isPhoneVerified: true,
                isActive: true,
                lastLoginAt: true,
                createdAt: true,
            }
        });

        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            error: 'Failed to fetch user data'
        });
    }
});

export default router;
