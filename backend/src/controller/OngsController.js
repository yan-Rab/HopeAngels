const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Ongs = mongoose.model("Ongs");

module.exports = {
    async searchOngs(request,response){
        const ongs = await Ongs.paginate();
        return response.json(ongs);
    },

    async createOngs(request,response){
        const { email } = request.body;

        try{
            if(await Ongs.findOne({email})){
                return response.status(400).send("this email already exists!");
            }
        
            const ongs = await Ongs.create(request.body);
            return response.json(ongs);

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
        const ongs = await findOne({ email }).select('+password');
        
        if(!ongs){
            return response.status(400).send("Ong not found");
        }

        if(!await bcrypt.compare(password, ongs.password)){
            return response.status(400).send("Invalid Password!");
        }

        ongs.password = undefined;

        return response.json(ongs);

    }
    
}