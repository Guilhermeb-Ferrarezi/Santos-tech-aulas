import express  from 'express'
import cors from 'cors'
import { usuario } from "./models/usuarios.js"
import rotas from './controller/controller_home.js'
import path from 'path'
import { fileURLToPath } from 'url'
import login from './controller/controller_login.js'
import helmet from "helmet";


const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



app.use(cors())
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);
app.use(express.static(path.resolve(__dirname, 'pages')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = 3000



const usuarios = [
  new usuario(1),
  new usuario(2),
]


app.use("/", rotas)
app.use("/login", login)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
