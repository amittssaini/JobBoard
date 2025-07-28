const authService = require('../services/auth.service');
const authInstance = new authService();
const postRegister=async (req,res)=>{
try {
    const registerData = req.body;
    console.log(registerData);
    const ans = await authInstance.register(registerData);
    console.log("constroller return",ans);
    res.send(ans);
} catch (error) {
    
}
}
const postLogin=async(req,res)=>{
try {
    const data = req.body;
    const resp = await authInstance.login(data);
    res.send(resp)
} catch (error) {
    
}
}

module.exports = {postLogin,postRegister}