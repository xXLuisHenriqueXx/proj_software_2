import * as request from 'supertest';
import { app } from '../app';

describe('Toy E2E', () => {
  let token: string;
  let createdToyId: string;

  beforeAll(async () => {
    await app.ready();
    
    const registerResponse = await request(app.server)
      .post('/api/auth/register')
      .send({
        name: "Usuario Dono de Brinquedo",
        email: `toy.owner.${Date.now()}@exemplo.com`,
        password: "Password@123",
        passwordConfirmation: "Password@123",
        cpf: "222.333.444-55",
        addressDistrict: "Bairro",
        addressStreet: "Rua",
        addressNumber: 1,
        addressCep: "12345-000"
      });
    
    token = registerResponse.body.token; 
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/toys', () => {
    it('não deve criar um brinquedo sem autenticação (Status 401)', async () => {
      const response = await request(app.server)
        .post('/api/toys')
        .send({ name: "Brinquedo Secreto" });
      
      expect(response.status).toBe(401);
    });

    it('deve criar um novo brinquedo quando autenticado (Status 201)', async () => {
      const response = await request(app.server)
        .post('/api/toys')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: "Super Carrinho de Teste",
          description: "Um carrinho muito rápido.",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      createdToyId = response.body.id;
    });
  });

  describe('GET /api/toys', () => {
    it('deve listar os brinquedos criados (Status 200)', async () => {
      const response = await request(app.server).get('/api/toys');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.some((toy: any) => toy.id === createdToyId)).toBe(true);
    });
  });
  
});
