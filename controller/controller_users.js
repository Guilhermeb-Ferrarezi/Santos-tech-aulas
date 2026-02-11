
import express from 'express'
import { usuario } from '../models/usuarios.js'

const router = express.Router()


router.get("/", (req, res) => {
  res.json(usuario.getUsuarios())
})

export default router