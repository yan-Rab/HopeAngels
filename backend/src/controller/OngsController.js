const mongoose = require("mongoose");

const Ongs = mongoose.model("Ongs");

module.exports = {
    async searchOngs(request,response){
        const ongs = await Ongs.paginate();
        return response.json(ongs);
    },

    async createOngs(request,response){
        const ongs = await Ongs.create(request.body);
        return response.json(ongs);
    },

    async destroyOngs(request,response){
        await Ongs.findByIdAndDelete(request.params.id);
        return response.send("Ong deletada!");
    },
    
}