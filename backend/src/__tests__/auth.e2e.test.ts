import * as request from 'supertest';
import { app } from '../app';
import { prisma } from '../prisma';

describe('Auth E2E', () => {
  beforeAll(async () => {
    await app.ready();
  });

  beforeEach(async () => {

    await prisma.toyPicture.deleteMany({});
    await prisma.toy.deleteMany({});
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await app.close();
  });

  let token: string;
  const testUser = {
    name: "Usuario Teste Auth",
    email: `auth.teste.${Date.now()}@exemplo.com`,
    password: "Password@123",
    passwordConfirmation: "Password@123",
    cpf: "111.111.111-11",
    addressDistrict: "Bairro Auth",
    addressStreet: "Rua Auth",
    addressNumber: 10,
    addressCep: "12345-000",
  };

  describe('POST /api/auth/register', () => {
    it('deve registar um novo utilizador com sucesso (Status 201)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send(testUser);
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      token = response.body.token;
    });

    it('não deve registar com um e-mail já existente (Status 409)', async () => {
      await request(app.server).post('/api/auth/register').send(testUser);
      const response = await request(app.server).post('/api/auth/register').send(testUser);
      expect(response.status).toBe(409);
    });

    it('não deve registar se as senhas não conferem (Status 400)', async () => {
      const response = await request(app.server)
        .post('/api/auth/register')
        .send({ ...testUser, passwordConfirmation: 'senha-errada' });

      expect(response.status).toBe(400);
      expect(response.body.message).toContain('As senhas não conferem');
    });
  });

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
        await request(app.server).post('/api/auth/register').send(testUser);
    });

    it('deve logar um utilizador existente com sucesso (Status 200)', async () => {
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({ email: testUser.email, password: testUser.password });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    it('não deve logar com uma senha incorreta (Status 401)', async () => {
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({ email: testUser.email, password: 'senha-errada' });
      
      expect(response.status).toBe(401);
    });
  });

  describe('Rotas Protegidas', () => {
    beforeEach(async () => {
        const registerResponse = await request(app.server).post('/api/auth/register').send(testUser);
        token = registerResponse.body.token;
    });

    it('PATCH /api/users/picture › deve atualizar a foto de um utilizador autenticado (Status 200)', async () => {
      const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epv2AAAAABJRU5ErkJggg==';
      const response = await request(app.server)
        .patch('/api/users/picture')
        .set('Authorization', `Bearer ${token}`)
        .send({ avatarBase64: base64Image });
      
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Foto atualizada com sucesso');
    });

    it('DELETE /api/auth/delete › deve deletar o utilizador autenticado (Status 200)', async () => {
      const response = await request(app.server)
        .delete('/api/auth/delete')
        .set('Authorization', `Bearer ${token}`);
      
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Usuário deletado com sucesso');
    });

    it('DELETE /api/auth/delete › o utilizador deletado não deve conseguir logar novamente (Status 404)', async () => {
      await request(app.server)
        .delete('/api/auth/delete')
        .set('Authorization', `Bearer ${token}`);
      
      const response = await request(app.server)
        .post('/api/auth/login')
        .send({ email: testUser.email, password: testUser.password });
      
      expect(response.status).toBe(404);
    });
  });
});

