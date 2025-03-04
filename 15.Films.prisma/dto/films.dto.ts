import createDebug from 'debug';

const debug = createDebug('films:dto:users');
debug('Loading users DTO');

import { z } from 'zod';

export const UserCreateDTO = z.object({
    username: z.string().min(3).max(255).nonempty(),
    password: z.string().min(8).max(255).nonempty(),
    email: z.string().email().nonempty(),
});

export type UserCreateDTO = z.infer<typeof UserCreateDTO>;
