
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
    public async login({request, auth }: HttpContextContract) {
        const username = request.input("username");
        const password = request.input("password");
        
        const token = await auth.use("api").attempt(username, password, {
            expiresIn: "10 days",
        });
        
        return token.toJSON();
    }        
}
