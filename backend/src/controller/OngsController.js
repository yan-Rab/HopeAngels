const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authHash = require('../auth/auth.json');

const Ongs = mongoose.model("Ongs");

function generateToken(params = {}){
    return jwt.sign(params,authHash.secret,{
        expiresIn: 86400,
    });
}

module.exports = {
    async searchOngs(request,response){
        const ongs = await Ongs.paginate();
        return response.json(ongs);
    },

    async createOngs(request,response){
        const { email } = request.body;
        try{

        if(await Ongs.findOne({email})){
            return response.status(400).send("Ong already exists!");
        }

        const ongs = await Ongs.create(request.body);
        ongs.password = undefined;

        return response.json({ongs, token: generateToken({id: ongs.id})});

        }catch(error){
            return response.status(400).send("Register failed!");
        }

    },

    async destroyOngs(request,response){
        await Ongs.findByIdAndDelete(request.params.id);
        return response.send("Ong deletada!");
    },

    async authenticationOngs(request,response){
        const { email, password } = request.body;

        const ongs = await Ongs.findOne({email}).select("+password");

        if(!ongs){
            return response.status(400).send("Ong not found!");
        }

        if(!await bcrypt.compare(password, ongs.password)){
            return response.status(400).send("Invalid password!");
        }

        ongs.password = undefined;

        return response.json({ongs,token: generateToken({id: ongs.id})});

    }
    
}