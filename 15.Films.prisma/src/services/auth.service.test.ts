import { vi } from 'vitest';
import { AuthService } from './auth.service';
import { hash, } from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { mock } from 'node:test';


describe('Given a instance of Authservice'),  () => {
            const mockHash: string;
            const mockPassword: string;
            const authService = {
                hash: vi.fn().mockResolvedValue(mockHash),
                compare: vi.fn().mockResolvedValue(mockHash),
                sign: vi.fn().mockResolvedValue(mockHash),
                verify: vi.fn().mockResolvedValue(mockHash),
            }
        }

        describe('When hashPassword is called', () => {
   
            test('Then it should hash a password', async () => {});
        });

        describe('When comparePassword is called', () => {
            test('Then it should compare a password', async () => {});
        });

        describe('When generateToken is called', () => {
            test('Then it should generate a token', async () => {});
        });

        describe('When verifyToken is called', () => {
            test('Then it should verify a token', async () => {});
        });
    };
