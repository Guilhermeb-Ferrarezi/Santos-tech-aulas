import { Router } from "express";
import { pool } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class user {
  id;
  name;
  email;
  password;
  role;
}
const router = Router();
async function checkPassword(inputPassword, storedHash) {
  return bcrypt.compare(inputPassword, storedHash);
}


export function userRegister() {
  router.post();
}

export function userLogin() {
  router.post("/", async (req, res) => {
    const { usuario, senha } = req.body;
    const loginUsername = usuario.trim();
    try {
      const result = await pool.query(
        `
        SELECT id, name, email, password, role
        FROM "user"
        WHERE LOWER(email) = LOWER($1) OR lower(name) = LOWER($1)
      `,
        [loginUsername],
      );

      const user = result.rows[0];
      const senhaHash = user.password;
      const senhaValida = checkPassword(senha, senhaHash);
      if (!user) {
        return res.status(401).json({ message: "Usuários ou senha inválidos" });
      }
      if (!senhaValida) {
        return res.status(401).json({ message: "Usuários ou senha inválidos" });
      }
      return res.status(200).json({
        message: "Login realizado com sucesso",
        user: {
          id: user.id,
          usuario: user.email,
          email: user.email,
          nome: user.name,
          role: user.role,
        },
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro interno" });
    }
  });
  return router;
}
export default router;
