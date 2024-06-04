const request = require('supertest');
const app = require('../app.js'); 

describe('Teste de rotas de Funcionario', () => {
    let funcID;

    // Teste para criar um novo usuário
    it('Deve criar um novo usuário', async () => {
        const newFUnc = {
            first_name: 'rodrigp',
            last_name: 'fortes',
            tipo_funcionario: 'empregado',
        };
        const resultado = await request(app)
            .post('/teste/func')
            .send(newFUnc);
        expect(resultado.statusCode).toEqual(201);
        expect(resultado.body).toHaveProperty('id_funcionario');
        funcID = resultado.body.id_funcionario; 
    });

    it('Lista dos funcionarios da instituição', async () => {

        const resultado = await request(app).get('/teste/all_func');
        console.log(resultado.body);
        expect(resultado.statusCode).toEqual(200);
        expect(Array.isArray(resultado.body)).toBe(true);

    });


    it('Deve excluir um usuário', async () => {
        const resultado = await request(app).delete(`/teste/delete_funcionario/${funcID}`);
        expect(resultado.statusCode).toEqual(204);
    });


});

    

