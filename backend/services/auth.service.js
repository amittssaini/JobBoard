const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
class Auth{
    async register(userData){
        try {
         const hash = await this.hashPassword(userData.password); 
         const newUserDoc =  new userModel({...userData,password:hash});  
         const resp = await newUserDoc.save();
         return resp;
        } catch (error) {
            return error.message;
        }
    }
    async login(userData){
        try {
            const dbUser= await this.findUser(userData.email);
            if(!dbUser){
                return "User not Found";
            }
            console.log("email is paased");
         const verifyPassword = await this.verifyPassword(userData.password,dbUser.password);
         console.log(verifyPassword);
         if(!verifyPassword) return "User enter wrong password"
         return "User is Valid & verified "

        } catch (error) {
           return error.message; 
        }

    }
   async findUser(email){
        try {
           const resp = await  userModel.findOne({email})
           if(resp) return resp;
           else return false;
           
        } catch (error) {
            return error.message;
        }
    }
     async verifyPassword(loginPassword,userPassword){
        try {
         const resp = await bcrypt.compare(loginPassword,userPassword);
         return resp;
        } catch (error) {
            return error.message;
        }
    }
    async hashPassword(password){
        try {
            const salt = await bcrypt.genSalt();
            console.log(salt);
            const hash = await bcrypt.hash(password,salt);
            return hash;

        } catch (error) {
            return error;
        } 
    }

}
module.exports= Auth;