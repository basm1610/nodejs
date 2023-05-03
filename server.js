import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.mongConnection);

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get("/students", (res, req) => {
    req.send("hello world")

})


app.get("/users", (res, req) => {
    req.send("hello world")

})


app.get("/admins", (res, req) => {
    req.send("hello world")

})

app.get("/login", (res, req) => {
    req.send("hello world")

})

app.get("/basm", (res, req) => {
    req.send("hello world")

})
app.get("/andro", (res, req) => {
    req.send("hello andro")

})



app.listen(process.env.port, () => {
    console.log(`Started application on URL: http://localhost:${process.env.port}`);
})