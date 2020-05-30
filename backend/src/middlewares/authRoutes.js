const jwt = require('jsonwebtoken');
const authHash = require('../auth/auth.json');

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).send({tokenError: "No token provided"});
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2){
        return response.status(401).send({tokenError: "Token error"});
    }

    const [ bearer, token ] = parts;

    if(!/^Bearer$/i.test(bearer)){
        return response.status(401).send({tokenError: "Token malformated"});
    }

    jwt.verify(token, authHash.secret, (error, decoded) => {
        if(error){
            return response.status(401).send({tokenError: "Invalid Token"});
        }

        request.userId = decoded.id;
        return next();
    })
}



