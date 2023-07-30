import express from "express";

const app = express();

app.get("/", (req,res)=>{
    const today = new Date();
    let day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to Work Hard!";

    if(day === 0 || day === 6){
        type = "the weekend";
        adv = "It's time to have some fun!";
    }
    res.render("index.ejs", {dayType: type, advice: adv});
})

app.listen(3000, ()=>{
    console.log("Server is running on the port 3000");
})