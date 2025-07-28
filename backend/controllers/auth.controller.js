const postRegister=(req,res)=>{
try {
    const registerData = req.body;
    console.log(registerData);
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