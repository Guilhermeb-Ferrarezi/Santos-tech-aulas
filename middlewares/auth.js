import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export function login(req, res) {
  const { loginInput, senha } = req.body;
  if (!req.body){
    res.send("Erro ao fazer login")
  }
}

export function logado(req, res, next) {
  
  const token = req.cookies?.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (_error) {
    res.clearCookie("token");
    return res.redirect("/login");
  }
}
