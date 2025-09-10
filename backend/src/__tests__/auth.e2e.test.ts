// src/__tests__/auth.e2e.test.ts

import * as request from 'supertest';
import { app } from '../app';

describe('Auth E2E', () => {
    beforeAll(async () => {
        await app.ready();
  });

    afterAll(async () => {
        await app.close();
  });

  let token: string;
    const testUser = {
    name: "Usuario de Teste E2E",
    email: `teste.e2e.${Date.now()}@exemplo.com`,
    password: "Password@123",
    passwordConfirmation: "Password@123",
    cpf: "123.456.789-11",
    addressDistrict: "Bairro E2E",
    addressStreet: "Rua dos Testes E2E",
    addressNumber: 123,
    addressCep: "12345-000"
    };


// testes de exemplo
  describe('POST /api/auth/register', () => {
    it('deve registrar um novo usuário com sucesso', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send(testUser);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');

      token = response.body.token; 
    });

    it('não deve registrar um usuário com um email duplicado', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send(testUser); 

      expect(response.status).toBe(401); 
    });
  });

  describe('POST /api/auth/login', () => {
    it('deve logar um usuário existente com sucesso', async () => {
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: testUser.password,
        });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    it('não deve logar com uma senha incorreta', async () => {
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'senha-errada',
        });
      
      expect(response.status).toBe(401);
    });
  });

  describe('PATCH /api/users/picture', () => {
    it('deve atualizar a foto de um usuário autenticado', async () => {
      const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epv2AAAAABJRU5ErkJggg==';

      const response = await request(app.server)
        .patch('/api/users/picture')
        .set('Authorization', `Bearer ${token}`) 
        .send({
          avatarBase64: base64Image
        });

      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Avatar atualizado com sucesso');
    });

    it('não deve atualizar a foto sem um token de autenticação', async () => {
      const response = await request(app.server)
        .patch('/api/users/picture')
        .send({
          avatarBase64: 'qualquer-coisa'
        });

      expect(response.status).toBe(401);
    });
  });

  describe('DELETE /api/auth/delete', () => {
    it('deve deletar o usuário autenticado', async () => {
      const response = await request(app.server)
        .delete('/api/auth/delete')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Usuário deletado com sucesso');
    });
      
    it('o usuário deletado não deve conseguir logar novamente', async () => {
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: testUser.password,
        });
      
      expect(response.status).toBe(404); 
    });
  });

    describe('POST /api/auth/register', () => {
    const uniqueEmail = `teste.e2e.${Date.now()}@exemplo.com`;
    let token: string;

    it('deve registrar um novo usuário com sucesso (Status 200)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send({
          name: "Usuario de Teste Válido",
          email: uniqueEmail,
          password: "Password@123",
          passwordConfirmation: "Password@123",
          cpf: "111.222.333-44", 
          addressDistrict: "Bairro dos Testes",
          addressStreet: "Rua dos Testes Automatizados",
          addressNumber: 123,
          addressCep: "12345-000"
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      token = response.body.token; // Salva o token para testes futuros
    });

    it('não deve registrar com um email já existente (Status 401)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send({
          name: "Outro Usuario",
          email: uniqueEmail, 
          password: "Password@123",
          passwordConfirmation: "Password@123",
          cpf: "555.666.777-88",
          addressDistrict: "Bairro",
          addressStreet: "Rua",
          addressNumber: 1,
          addressCep: "12345-000"
        });
      
      expect(response.status).toBe(401);
    });

    it('não deve registrar se as senhas não conferem (Status 400)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send({
          name: "Usuario Senha Errada",
          email: `outro.email.${Date.now()}@exemplo.com`,
          password: "Password@123",
          passwordConfirmation: "SENHA_DIFERENTE",
          cpf: "999.888.777-66",
          addressDistrict: "Bairro",
          addressStreet: "Rua",
          addressNumber: 1,
          addressCep: "12345-000"
        });
      
      expect(response.status).toBe(400);
    });

    it('não deve registrar se a senha for muito curta (Status 400)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send({
          name: "Usuario Senha Curta",
          email: `senha.curta.${Date.now()}@exemplo.com`,
          password: "123",
          passwordConfirmation: "123",
          cpf: "111.222.444-55",
          addressDistrict: "Bairro",
          addressStreet: "Rua",
          addressNumber: 1,
          addressCep: "12345-000"
        });
      
      expect(response.status).toBe(400);
    });
  });

});