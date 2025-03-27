import { AuthInterceptor } from './auth.interceptor';
import { HttpError } from '../types/http-error.js';
import { Role } from '@prisma/client';
import { vi } from 'vitest';
import { Request, Response, NextFunction } from 'express'; // Asegúrate de importar los tipos correctos de Express
import { AuthService } from '../services/auth.service.js';

// Mock de Prisma
vi.mock('@prisma/client', () => ({
    Role: vi.fn().mockResolvedValue({}),
}));

// Mocks de dependencias
const mockVerifyToken = vi.fn();
const mockAuthService = {
    verifyToken: mockVerifyToken,
} as unknown as typeof AuthService;

// Suponiendo que tenemos un repositorio para los reviews
const mockRepoReviews = {
    readById: vi.fn().mockResolvedValue({ userId: 1 }), // Simulando repositorio de reviews
};

// Instanciamos el AuthInterceptor
describe('Given class AuthInterceptor', () => {
    let authInterceptor: AuthInterceptor;

    beforeAll(() => {
        // Arrange: Inicializamos el interceptor con el mock del repo
        authInterceptor = new AuthInterceptor(mockRepoReviews);
    });

    describe('When authenticate is called', () => {
        test('Then it should call next if the token is valid', async () => {
            const req: Request = {
                headers: {
                    authorization: 'Bearer valid-token',
                },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Mock de verifyToken para simular una respuesta exitosa
            mockVerifyToken.mockResolvedValue({ id: 1, role: Role.USER });

            // Act
            await authInterceptor.authenticate(req, res, next);

            // Assert
            expect(mockVerifyToken).toHaveBeenCalledWith('valid-token');
            expect(req.user).toEqual({ id: 1, role: Role.USER });
            expect(next).toHaveBeenCalled();
        });

        test('Then it should call next with an error if no token is provided', async () => {
            const req: Request = { headers: {} } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Act
            await authInterceptor.authenticate(req, res, next);

            // Assert
            expect(next).toHaveBeenCalledWith(expect.any(HttpError));
        });

        test('Then it should call next with an error if token is invalid', async () => {
            const req: Request = {
                headers: {
                    authorization: 'Bearer invalid-token',
                },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Mock de verifyToken para simular un error
            mockVerifyToken.mockRejectedValue(new Error('Invalid token'));

            // Act
            await authInterceptor.authenticate(req, res, next);

            // Assert
            expect(next).toHaveBeenCalledWith(expect.any(HttpError));
        });
    });

    describe('When hasRole is called', () => {
        test('Then it should call next if the user has the required role', async () => {
            const req: Request = {
                user: { role: Role.USER },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Act
            authInterceptor.hasRole(Role.USER)(req, res, next);

            // Assert
            expect(next).toHaveBeenCalled();
        });

        test('Then it should call next with an error if the user does not have the required role', async () => {
            const req: Request = {
                user: { role: Role.USER },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Act
            authInterceptor.hasRole(Role.ADMIN)(req, res, next);

            // Assert
            expect(next).toHaveBeenCalledWith(expect.any(HttpError));
        });
    });

    describe('When isUser is called', () => {
        test('Then it should call next if the user is the same as the requested user or has admin role', async () => {
            const req: Request = {
                user: { id: 1, role: Role.USER },
                params: { id: '1' },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Act
            authInterceptor.isUser(req, res, next);

            // Assert
            expect(next).toHaveBeenCalled();
        });

        test('Then it should call next with an error if the user is not the same and does not have admin role', async () => {
            const req: Request = {
                user: { id: 1, role: Role.USER },
                params: { id: '2' },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Act
            authInterceptor.isUser(req, res, next);

            // Assert
            expect(next).toHaveBeenCalledWith(expect.any(HttpError));
        });
    });

    describe('When isOwnerReview is called', () => {
        test('Then it should call next if the user is the owner of the review or has admin role', async () => {
            const req: Request = {
                user: { id: 1, role: Role.USER },
                params: { id: '1' },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Simulando que la review pertenece al usuario
            mockRepoReviews.readById.mockResolvedValue({ userId: 1 });

            // Act
            await authInterceptor.isOwnerReview(req, res, next);

            // Assert
            expect(next).toHaveBeenCalled();
        });

        test('Then it should call next with an error if the user is not the owner and does not have admin role', async () => {
            const req: Request = {
                user: { id: 2, role: Role.USER },
                params: { id: '1' },
            } as Request;
            const res: Response = {} as Response;
            const next: NextFunction = vi.fn();

            // Simulando que la review no pertenece al usuario
            mockRepoReviews.readById.mockResolvedValue({ userId: 1 });

            // Act
            await authInterceptor.isOwnerReview(req, res, next);

            // Assert
            expect(next).toHaveBeenCalledWith(expect.any(HttpError));
        });
    });
});
