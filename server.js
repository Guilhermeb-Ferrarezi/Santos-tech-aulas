import express  from 'express'
import cors from 'cors'
import { admin, usuario } from "./models/usuarios.js"
import rotas from './controller/controller_home.js'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
const PORT = 3000


app.use(express.static(path.join(__dirname + '/pages')))
const usuarios = [
  new usuario(1),
  new usuario(2),
  new admin(),
]


app.use("/", rotas)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
