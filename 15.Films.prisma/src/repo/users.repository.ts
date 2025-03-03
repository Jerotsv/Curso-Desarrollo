import createDebug from 'debug';
import { Repository } from './repository.type';
import { Film, PrismaClient } from '@prisma/client';

const debug = createDebug('films:repository:users');

export class FilmRepo implements Repository<Film>