import express from 'express'
import { registerRouter,loginRouter } from '../controller/userController.js'

const router = express.Router()


//All routes
//REGISTER || METHOD : POST
router.post('/register', registerRouter)

//LOGIN  || METHOD : POST
router.post('/login', loginRouter)



export default router
