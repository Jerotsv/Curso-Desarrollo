import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service.js';
import { HttpError } from '../types/http-error.js';
import createDebug from 'debug';
import { Role } from '@prisma/client';

const debug = createDebug('films:interceptors:auth');

export class AuthInterceptor {
    constructor() {
        debug('Instanciando');
    }

    authenticate = async (req: Request, _res: Response, next: NextFunction) => {
        debug('authenticate');

        //req.cookies
        const { authorization } = req.headers;

        if (!authorization || authorization.includes('Bearer') === false) {
            const newError = new HttpError(
                'Token not found',
                498,
                'Token invalid',
            );
            next(newError);
            return;
        }

        const token = authorization.split(' ')[1];
        try {
            const payload = await AuthService.verifyToken(token);
            // req.session.user = payload;
            _res.locals.user = payload;
            next();
        } catch (err) {
            const newError = new HttpError(
                (err as Error).message,
                498,
                'Token invalid',
            );
            next(newError);
        }
    };

    isAdmin = async (req: Request, _res: Response, next: NextFunction) => {
        debug('isAdmin');

        if (!req.session.user || req.session.user.role !== Role.ADMIN) {
            const newError = new HttpError(
                'You do not have permission',
                403,
                'Forbidden',
            );
            next(newError);
            return;
        }

        next();
    };
}
