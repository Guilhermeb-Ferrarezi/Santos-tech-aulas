import express  from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import helmet from "helmet";
import { usuario } from "./models/usuarios.js"
import home from './controller/controller_home.js'
import login from './controller/controller_login.js'
import users from './controller/controller_users.js'


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


app.use("/", login)
app.use("/login", login)
app.use("/home", home)
app.use("/usuarios", users)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
