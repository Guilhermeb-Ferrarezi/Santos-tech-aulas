import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { usuario } from "../models/usuarios.js";
import { settings } from "cluster";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "pages", "login", "login.html"));
});

router.post("/", (req, res) => {
  const { usuario: loginInput, senha } = req.body;
  console.log("login:", loginInput, senha);

  const usuarios = usuario.getUsuarios();
  const usuarioValido = usuarios.find((usuarioAtual) =>
      (usuarioAtual.nome === loginInput || usuarioAtual.email === loginInput) &&
      usuarioAtual.senha === senha,
  );

  if (usuarioValido) {
    if (req.get("X-Requested-With") === "fetch") {
      return res.status(200).send("Login bem-sucedido");
    }
    setTimeout(() => {
      return res.redirect("/home");
    }, 2000);
  }

  return res.status(401).send("Credenciais invalidas");
});

export default router;
