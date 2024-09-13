const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000
const fs = require("fs")
app.use(express.json())
app.use(cors({origin : true}))

app.post("/register", async (req,res) =>{
    const { username , password } = req.body
   try {
    fs.appendFile("users.txt",`username:${username}, password:${password} \n`,"utf-8",(err)=>{
        if (err){console.log("error rgistering the user",err)}
    })
   } 
   catch (error){
     res.end("error creating user", error)
   }
})
app.listen(port, () =>{
    console.log("server listening on port",port)
})