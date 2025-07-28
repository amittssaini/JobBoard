const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
class Auth{
    async register(userData){
        try {
         const hash = await this.hashPassword(userData.password);   
          return hash;
        } catch (error) {
            
        }
    }
    login(){

    }

    async hashPassword(password){
        try {
            const salt = await bcrypt.genSalt();
            console.log(salt);
            const hash = await bcrypt.hash(password,salt);
            console.log(hash);

        } catch (error) {
            return error;
        } 
    }

}
module.exports= Auth;