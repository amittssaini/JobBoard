const authService = require('../services/auth.service');
const authInstance = new authService();
const postRegister=async (req,res)=>{
try {
    const registerData = req.body;
    console.log(registerData);
    const ans = await authInstance.register(registerData);
    console.log("constroller return",ans);
    res.send("hello for the register");
} catch (error) {
    
}
}
const postLogin=(req,res)=>{
try {
    const data = req.body;
    console.log(data);
    res.send("hello from login ")
} catch (error) {
    
}
}

module.exports = {postLogin,postRegister}