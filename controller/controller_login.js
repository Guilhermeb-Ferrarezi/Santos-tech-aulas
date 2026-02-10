import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '/pages', '/login', 'login.html'))
})

router.post('/', (req, res) => {
  const { usuario, senha } = req.body
  console.log('login:', usuario, senha)
  res.status(200).send('Login recebido')
})

export default router
