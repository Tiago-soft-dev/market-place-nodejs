const authService = require("../services/auth.service");
const bcrypt = require("bvrypt");

const loginController = async (req,res) =>{
    const {email, senha} = req.body;

    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({message: "usuario nao encontado"});
    }
    const isPassWordValid = await bcrypt.compare(senha, user.senha);

    if(!isPassWordValid){
        return res.status(400).send({message: "Senha invalida"});
    }

    const token = authService.generateToken(user.id);
    res.status(200).send({
        email,
        token

    });
}

module.exports = {loginController};