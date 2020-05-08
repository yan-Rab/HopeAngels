const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Users = mongoose.model("Users");

module.exports = {

    async searchUsers(request,response){
        const users = await Users.paginate();
        return response.json(users);
    },

    async createUsers(request,response){
        const { email } = request.body;
        try{

        if(await Users.findOne({email})){
            return response.status(400).send({error: "User Already Exists!"});
        }

        const users = await Users.create(request.body);
        users.password = undefined;

        return response.json(users);

       }catch(error){
           response.status(400).send({error: "Register of User failed!"});
        }

    },

    async authenticationUsers(request,response){
        const {email,password} = request.body;

        const users = await Users.findOne({email}).select('+password');

        if(!users){
            return response.status(400).send("User not found");
        }

        if(!await bcrypt.compare(password, users.password)){
            return response.status(400).send("Invalid Password!");
        }
        users.password = undefined;
        return response.json(users);
    }
   

}