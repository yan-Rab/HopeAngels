const mongoose = require('mongoose');

const Users = mongoose.model("Users");

module.exports = {

    async searchUsers(request,response){
        const users = await Users.paginate();
        return response.json(users);
    },

    async createUsers(request,response){
        const users = await Users.create(request.body);
        return response.json(users);
    },



}