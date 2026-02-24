import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'pages', 'home', 'index.html'))
})

router.get('/check', (req, res) => {
  return res.status(200).json({
    autenticado: true,
    usuario: req.user ?? null,
  })
})


export default router
