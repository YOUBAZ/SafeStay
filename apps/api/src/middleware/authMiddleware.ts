import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/authUtils';

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
        role: string;
    };
}

/**
 * Middleware to verify JWT token and attach user to request
 */
export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: 'Authentication required',
                message: 'No token provided'
            });
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix

        // Verify token
        const decoded = verifyAccessToken(token);

        if (!decoded) {
            return res.status(401).json({
                error: 'Authentication failed',
                message: 'Invalid or expired token'
            });
        }

        // Attach user info to request
        req.user = {
            userId: decoded.userId,
            email: decoded.email,
            role: decoded.role,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Authentication failed',
            message: 'Token verification failed'
        });
    }
}

/**
 * Middleware to check if user has required role
 */
export function requireRole(...allowedRoles: string[]) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({
                error: 'Authentication required',
                message: 'No user found in request'
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                error: 'Access denied',
                message: `This action requires one of the following roles: ${allowedRoles.join(', ')}`
            });
        }

        next();
    };
}
