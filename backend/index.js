// backend starting code 
const express = require('express');
const authRouter = require('./routes/auth.route')

const app = new express();
const PORT = 8082
app.listen(PORT,()=>console.log("app is listen at the port ", PORT));
app.use(express.json());
app.use('/job/auth',authRouter);
