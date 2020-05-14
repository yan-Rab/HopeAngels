const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authHash = require('../auth/auth.json');
const Users = mongoose.model("Users");

function generateToken(params = {}){
    return jwt.sign(params, authHash.secret, {
        expiresIn: 86400,
});

}

module.exports = {

    async searchUsers(request,response){
        const users = await Users.paginate();
        return response.json(users);
    },

    async createUsers(request,response){
        const { email } = request.body;
        try{

        if(await Users.findOne({email})){
            return response.status(400).json({error: "User Already Exists!"});
        }

        const users = await Users.create(request.body);
        users.password = undefined;

        return response.json({users, token: generateToken({id: users.id})});

       }catch(error){
           response.status(400).json({error: "Register of User failed!"});
        }

    },

    async authenticationUsers(request,response){
        const {email,password} = request.body;

        const users = await Users.findOne({email}).select('+password');

        if(!users){
            return response.status(400).json({error: "User not found"});
        }

        if(!await bcrypt.compare(password, users.password)){
            return response.status(400).json({error:"Invalid Password!"});
        }
        users.password = undefined;

        return response.json({
            users, 
            token: generateToken({id: users.id}),
        });   
    }

}