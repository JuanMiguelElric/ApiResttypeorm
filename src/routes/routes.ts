import { Router,Request,Response } from "express";
import { CreateUserController } from "../controllers/CreateUserController";


const router = Router();
const CreateUserControllers = new CreateUserController();
router.get('/',(req:Request,res:Response)=>{

    // todas funcionalidades dad rota

    return res.json({mensagem:"bem vindo ao meu mundo"})

})
router.post('/usuario', CreateUserControllers.handle)
export {router}