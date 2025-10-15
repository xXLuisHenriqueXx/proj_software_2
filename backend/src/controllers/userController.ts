import { Request, Response } from "express";
import { getPublicUserById } from "../services/userService";

export async function getMe(req: Request, res: Response) {
  try {
    const userId = (req as any).userId as string;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const user = await getPublicUserById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUserPublicById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getPublicUserById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
}
