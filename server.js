const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let post = [{}]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

app.get("/api", (req, res)=> {
    res.json({message: "Express says hey"})
    
})

app.get("/post",(req,res)=>{
        res.json({message:"Express says heyyyyy"})
})

app.post("/post", function (req, res) {
 
    console.log(req.body);
    const newuser = req.body;
  
  
    console.log(newuser);
  
    post.push(newuser);
  
    res.json(newuser);
  });
  



app.listen(PORT, ()=>console.log(`Express listening @${PORT}`))