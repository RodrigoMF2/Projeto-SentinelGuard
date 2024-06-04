const request = require('supertest');
const app = require('../app.js'); // Certifique-se de que o caminho está correto

describe('Testes de rotas de USER', () => {
    let userId;

     // Teste para criar um novo usuário
    it('Deve criar um novo usuário', async () => {
        const newUser = {
            first_name: 'Test',
            last_name: 'User',
            email: 'test.user@example.com',
            password: 'password123',
            tipo_user: 'user'
        };
        const resultado = await request(app)
            .post('/teste/users/create')
            .send(newUser);
        expect(resultado.statusCode).toEqual(201);
        expect(resultado.body).toHaveProperty('id_user');
        userId = resultado.body.id_user; // Armazenar o ID do usuário criado para testes subsequentes
    });


    // Teste para obter a lista de todos os usuários
    it('Deve obter a lista de todos os usuários', async () => {
        const resultado = await request(app).get('/teste/users');
        console.log(resultado.body);
        expect(resultado.statusCode).toEqual(200);
        expect(Array.isArray(resultado.body)).toBe(true);
    });


    // Teste para obter um usuário por ID
    it('Deve obter um usuário por ID', async () => {
        const resultado = await request(app).get(`/teste/users/${userId}`);
        expect(resultado.statusCode).toEqual(200);
        expect(resultado.body).toHaveProperty('id_user', userId);
    });

    // Teste para atualizar um usuário
    it('Deve atualizar um usuário', async () => {
        const updatedUser = {
            first_name: 'Updated',
            last_name: 'User'
        };
        const resultado = await request(app)
            .put(`/teste/users/update/${userId}`)
            .send(updatedUser);
        expect(resultado.statusCode).toEqual(200);
        expect(resultado.body.first_name).toBe(updatedUser.first_name);
        expect(resultado.body.last_name).toBe(updatedUser.last_name);
    });

    // Teste para excluir um usuário
    it('Deve excluir um usuário', async () => {
        const resultado = await request(app).delete(`/teste/users/delete/${userId}`);
        expect(resultado.statusCode).toEqual(204);

        // Verifique se o usuário foi realmente excluído
        const checkUser = await request(app).get(`/teste/users/${userId}`);
        expect(checkUser.statusCode).toEqual(404);
    });
});
