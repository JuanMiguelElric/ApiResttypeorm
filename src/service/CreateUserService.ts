interface Iusuario{
    name: string,
    email:string
}
class CreateUserService {
    execute({name,email}:Iusuario){
        const data =[];
        data.push({name,email});
        return data

    }

}
export { CreateUserService}