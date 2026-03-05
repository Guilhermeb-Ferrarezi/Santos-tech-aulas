import 'dotenv/config';
import express  from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import helmet from "helmet";
import cookieParser from "cookie-parser";
import home from './controller/home.controller.js'
import login_page from './controller/login.controller.js'
import { userLogin } from './routes/auth.js';
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

// Db connection
databaseConnect()
app.use("/", login_page)
app.use("/login", login_page, userLogin())
app.use("/home", home)


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}/`)
})
