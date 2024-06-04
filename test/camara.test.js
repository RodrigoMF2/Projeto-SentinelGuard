const request = require('supertest');
const app = require('../app.js'); 

describe('Camara API', () => {
    let camaraId;

    it('Deve criar uma nova câmera', async () => {
        const newCamara = { localizacao: 'Entrada', descricao:'HD ultra violeta', status:'inativo'};
        const response = await request(app).post('/teste/sentinels/create').send(newCamara);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('camara_id');
        camaraId = response.body.camara_id; // Salvar o ID para testes futuros
    });

    it('Deve listar todas as câmeras', async () => {
        const response = await request(app).get('/teste/sentinel/all-sentinel');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Deve obter uma câmera pelo ID', async () => {
        const response = await request(app).get(`/teste/sentinel/${camaraId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('camara_id', camaraId);
    });

    it('Deve atualizar uma câmera', async () => {
        const updatedCamara = {  descricao: 'Caracteristicas aprimoradas', localizacao: 'Saída' };
        const response = await request(app).put(`/teste/sentinel/update-sentinel/${camaraId}`).send(updatedCamara);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('descricao', 'Caracteristicas aprimoradas');
    });
});
