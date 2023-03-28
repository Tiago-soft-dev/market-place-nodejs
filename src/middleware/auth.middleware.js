const jwt = require("jsonwebtoken");
const {findUserByIdService} = require("../services/usuario.service.js") ;

module.exports = async (req,res,next) => {
    const authHEader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({message: "o token nao foi informado"});
    }

    const parts = authHeader.split(" "); //["Bearer, <token>""]

    if(parts.length !== 2) {
        return res.status(401).send({message: "o token invalido"});

    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)) {
        return res.status(401).send({message: "o token invalido"});
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded)=> {
        if(err){
            return res.status(500).send({message: "o token invalido"});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id) {
            return res.status(401).send({message: "o token invalido"});
        }

        req.userId = decoded.id;

        return next();
    })

}