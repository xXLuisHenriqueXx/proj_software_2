import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-for-dev';

export const tokenHelper = {
  async generateToken(userId: string): Promise<string> {
    return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '1d' });
  },

  async verifyToken(token: string): Promise<jwt.JwtPayload | string | null> {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
};
