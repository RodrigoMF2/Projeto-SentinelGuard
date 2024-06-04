const request = require('supertest');
const app = require('../app'); // Certifique-se de que este é o caminho correto para o seu app Express

describe('Eventos API', () => {
    let eventoId;

    beforeAll(async () => {
        server = await app.listen(3001); // Inicializa o servidor antes de todos os testes
    });

    afterAll(async () => {
        await server.close(); // Fecha o servidor após todos os testes
    });

    it('Deve criar um novo evento', async () => {
        const newEvento = { camara_id: 1, usuario_id: 1, tipo: 'Roubo', descricao: 'Roubo na entrada', data_hora_evento: new Date() };
        const response = await request(app).post('/teste/eventos').send(newEvento);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('eventos_id');
        eventoId = response.body.eventos_id;
    });

    it('Deve listar todos os eventos', async () => {
        const response = await request(app).get('/teste/all_eventos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Deve obter um evento pelo ID', async () => {
        const response = await request(app).get(`/teste/eventos/${eventoId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('eventos_id', eventoId);
    });


    it('Deve obter um evento com localização da câmera', async () => {
        const response = await request(app).get(`/teste/eventos/${eventoId}/location`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('Camara');
        expect(response.body.camara_id).toHaveProperty('localizacao');
    });
});
