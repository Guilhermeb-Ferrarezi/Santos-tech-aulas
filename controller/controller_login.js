import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import { usuario } from "../models/usuarios.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "pages", "login", "login.html"));
});

router.post("/", (req, res) => {
  const { usuario: loginInput, senha } = req.body;
  console.log("login:", loginInput, senha);

  const usuarios = usuario.getUsuarios();
  const usuarioValido = usuarios.find((usuarioAtual) =>
      (usuarioAtual.nome.trim() === loginInput.trim() || usuarioAtual.email.trim() === loginInput.trim()) &&
      usuarioAtual.senha.trim() === senha,
  );

  if (usuarioValido) {
    const token = jwt.sign(
      {
        id: usuarioValido.id,
        nome: usuarioValido.nome,
        email: usuarioValido.email,
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    if (req.get("X-Requested-With") === "fetch") {
      return res.status(200).send("Login bem-sucedido");
    }
    return res.redirect("/home");
  }

  return res.status(401).send("Credenciais invalidas");
});

export default router;
