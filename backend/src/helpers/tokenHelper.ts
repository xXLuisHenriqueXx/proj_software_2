import * as jwt from 'jsonwebtoken';
import { Role } from '../generated/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-for-dev';

export const tokenHelper = {
  async generateToken(userId: string, role: Role): Promise<string> {
    return jwt.sign({ userId: userId, role: role }, JWT_SECRET, { expiresIn: '1d' });
  },

  async verifyToken(token: string): Promise<jwt.JwtPayload | string | null> {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
};
