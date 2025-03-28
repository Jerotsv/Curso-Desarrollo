import request from 'supertest';
import { createApp } from '../src/app';

const app = createApp();
const host = 'http://localhost:3000';
const urlApi = host + '/api/films';
app.listen(3000, () => {});

describe('Get /api/films', () => {
    it('should return 200 OK', async () => {
});

request(app).get(urlApi).expect(200);
