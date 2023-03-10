if (process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}



const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');


const indexRouter = require("./routes/index")

const mongoose = require("mongoose")

mongoose.set('strictQuery', true);
mongoose.connect("process.env.DATABASE_URL", () => {
    console.log("connected with Mongoose")
});



app.set("view engine", 'ejs');
app.set("views".__dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))

app.use("/", indexRouter)


app.listen(process.env.PORT || 8000 );