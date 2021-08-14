const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res)=> {
    res.json({message: "Express says hey"})
})

app.listen(PORT, ()=>console.log(`Express listening @${PORT}`))