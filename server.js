import 'dotenv/config';
import express  from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import helmet from "helmet";
import cookieParser from "cookie-parser";
import home from './controller/controller_home.js'
import login_page from './controller/controller_login.js'
import users from './controller/controller_users.js'
import {logado, login} from './middlewares/auth.js';
import databaseConnect from './db/db.js';



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
app.use(cookieParser())
const PORT = Number(process.env.PORT) || 3000


app.use("/", login_page)
app.use("/login", login_page)
app.use("/home", logado, home)
app.use("/usuarios", logado, users)

// Db connection
databaseConnect()

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
