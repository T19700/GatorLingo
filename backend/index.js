import express from "express"
import cors from "cors"

const app=express();
app.use(cors());

app.get("/getData", (req, res)=> {
    res.send("Hello world!")
});

app.listen(5001, ()=>console.log("app is running"));