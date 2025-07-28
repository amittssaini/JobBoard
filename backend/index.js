// backend starting code 
const express = require('express');

const app = new express();
const PORT = 8082
app.listen(PORT,()=>console.log("app is listen at the port ", PORT));