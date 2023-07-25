const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/crudApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected.."))
    .catch((err) => console.error(err));

app.use(express.json());

const alienRouter = require("./routers/aliens");
app.use("/aliens", alienRouter);

app.listen(3000,() => 
{
    console.log("Server is up on port 3000");
})
