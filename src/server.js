const express = require("express")
const app = express();
const PORT = 3000;

app.get('/hello',(req,res)=>{
    res.json({message:"hello world"});
})

const server = app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

