import { HttpError } from './http-error';

export type AppResponse<T> = {
    results: T;
    error: HttpError | null;
};

export type AppResponseShadow<T> = {
    results: T[];
    error: string;
};
