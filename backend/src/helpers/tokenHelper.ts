import jwt from "jsonwebtoken";

export const tokenHelper = {
  async generateToken(userId: string) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido no ambiente");
    }

    const token = jwt.sign({ userId }, jwtSecret, { expiresIn: "15d" });
    return token;
  },

  async verifyToken(token: string) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido no ambiente");
    }
    try {
      return jwt.verify(token, jwtSecret);
    } catch (error) {
      return false
    }
  }
};
