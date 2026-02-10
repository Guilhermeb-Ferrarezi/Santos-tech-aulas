import express from 'express'

const router = express.Router()

router.get('/login', (req, res) => {   
  const { usuario, senha} = req.body;
  console.log(usuario, senha)
})

export default router
