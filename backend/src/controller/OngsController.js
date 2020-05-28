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
        return response.json({ongs});
    },

    async createOngs(request,response){
        const { email } = request.body;
        try{

        if(await Ongs.findOne({email})){
            return response.status(400).json({error:"Ong already exists!"});
        }

        const ongs = await Ongs.create(request.body);
        ongs.password = undefined;

        return response.json({ongs, token: generateToken({id: ongs.id})});

        }catch(error){
            return response.status(400).json({error:"Register failed!"});
        }

    },

    async destroyOngs(request,response){
        await Ongs.findByIdAndDelete(request.params.id);
        return response.send("Ong deletada!");
    },

    async authenticationOngs(request,response){
        const { email, password, proprietor } = request.body;
    
        const ongs = await Ongs.findOne({email}).select("+password");

        if(!ongs){
            return response.status(400).json({error:"Ong not found!"});
        }

        if(proprietor != ongs.proprietor){
            return response.status(404).json({error: "You are not proprietor this Ong"})
        }

        if(!await bcrypt.compare(password, ongs.password)){
            return response.status(400).json({error: "Invalid password!"});
        }

        ongs.password = undefined;

        return response.json({ongs,token: generateToken({id: ongs.id}), auth: true});

    },

    async searchOngEspecific(request, response){
        const { value } = request.body;
        const regex = new RegExp(`${value}[0-9]?`,'i');
        const ongs = await Ongs.find({title: {$regex: regex}});
        
        if(ongs.length === 0){
            return response.status(400).json({error: "Search not found"})
        }

        return response.json({ongs: ongs});
    }

    
    
}