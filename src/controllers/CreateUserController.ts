import { Request,Response } from "express"
import { CreateUserService } from "../service/CreateUserService";
class CreateUserController{
    //função que vai devolver respostas para as rotas
    handle(req:Request,res:Response){
        const CreateService= new CreateUserService();
        const name = req.body.name;
        const email = req.body.email;

        if(name.length ===0 || email.length ===0){
            return res.status(400).json({mensagem:"usuario não informado"})
        }

        const user = CreateService.execute({name,email})
        return res.status(200).json({user})
    }
        

}

export {CreateUserController}