import express  from 'express'
import cors from 'cors'
import { admin, usuario } from "./models/usuarios.js"
import rotas from './controller/controller_home.js'
import path from 'path'
import { fileURLToPath } from 'url'
import login from './controller/controller_login.js'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = 3000



const usuarios = [
  new usuario(1),
  new usuario(2),
  new admin(),
]


app.use("/", rotas)
app.use("/login", login)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
