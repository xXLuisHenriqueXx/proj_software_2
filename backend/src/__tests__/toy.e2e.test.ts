import * as request from 'supertest';
import { app } from '../app';
import { prisma } from '../prisma';

describe('Toy E2E', () => {
  let token: string;
  let createdToyId: string;
  let userId: string;

  beforeAll(async () => {
    await app.ready();
    
    await prisma.toyPicture.deleteMany({});
    await prisma.toy.deleteMany({});
    await prisma.user.deleteMany({});

    const userEmail = `toy.owner.${Date.now()}@exemplo.com`;
    const userPassword = "Password@123";

    const registerResponse = await request(app.server).post('/api/auth/register').send({
      name: "Dono do Brinquedo",
      email: userEmail,
      password: userPassword,
      passwordConfirmation: userPassword,
      cpf: "111.111.111-11",
      addressDistrict: "Bairro",
      addressStreet: "Rua",
      addressNumber: 1,
      addressCep: "12345-000"
    });

    token = registerResponse.body.token;
    
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    userId = payload.sub;
  });

  beforeEach(async () => {
    await prisma.toyPicture.deleteMany({});
    await prisma.toy.deleteMany({});
  });

  afterAll(async () => {
    await prisma.toyPicture.deleteMany({});
    await prisma.toy.deleteMany({});
    await prisma.user.deleteMany({});
    await app.close();
  });

  describe('POST /api/toys (Create)', () => {
    it('não deve criar um brinquedo com dados inválidos (Status 400)', async () => {
      const response = await request(app.server)
        .post('/api/toys')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: "Brinquedo Incompleto" });
      
      expect(response.status).toBe(400);
    });

    it('não deve criar um brinquedo sem autenticação (Status 401)', async () => {
      const newToy = {
        name: "Super Quebra-Cabeça",
        description: "Mil peças de pura diversão.",
        price: 50.0,
        isNew: true,
        canTrade: false,
        canLend: true,
        usageTime: 0,
        preservation: 5,
        type: ["QUEBRA_CABEÇAS", "EDUCATIVO"],
        ageGroup: "SEIS_A_DOZE",
        pictures: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epv2AAAAABJRU5ErkJggg=="]
      };
      const response = await request(app.server).post('/api/toys').send(newToy);
      expect(response.status).toBe(401);
    });

    it('deve criar um novo brinquedo quando autenticado (Status 201)', async () => {
      const newToy = {
        name: "Super Quebra-Cabeça",
        description: "Mil peças de pura diversão.",
        price: 50.0,
        isNew: true,
        canTrade: false,
        canLend: true,
        usageTime: 0,
        preservation: 5,
        type: ["QUEBRA_CABEÇAS", "EDUCATIVO"],
        ageGroup: "SEIS_A_DOZE",
        pictures: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epv2AAAAABJRU5ErkJggg=="]
      };
      
      const response = await request(app.server)
        .post('/api/toys')
        .set('Authorization', `Bearer ${token}`)
        .send(newToy);
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      createdToyId = response.body.id;
    });
  });

  describe('GET /api/toys/:toyId (Read)', () => {
    beforeEach(async () => {
        const newToy = {
            name: "Super Quebra-Cabeça",
            description: "Mil peças de pura diversão.",
            price: 50.0,
            isNew: true,
            canTrade: false,
            canLend: true,
            usageTime: 0,
            preservation: 5,
            type: ["QUEBRA_CABEÇAS", "EDUCATIVO"],
            ageGroup: "SEIS_A_DOZE",
            pictures: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epv2AAAAABJRU5ErkJggg=="]
        };
        const response = await request(app.server)
            .post('/api/toys')
            .set('Authorization', `Bearer ${token}`)
            .send(newToy);
        createdToyId = response.body.id;
    });

    it('deve buscar um brinquedo pelo seu ID (Status 200)', async () => {
      const response = await request(app.server)
        .get(`/api/toys/${createdToyId}`);

      expect(response.status).toBe(200);
      expect(response.body.name).toEqual("Super Quebra-Cabeça");
    });
  });
});

