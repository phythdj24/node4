// // const http = require("http");
// // const modename = require("./features") common js

// import http from "http";
// import {gernrateLovePerctange} from "./features.js";
// import fs from "fs"

// // const home = fs.readFile("./index.html", ()=> {
// //     console.log("file Read")
// // })

// const home = fs.readFileSync("./index.html");
// console.log(home)

// const server= http.createServer((req,res)=> {
//     // res.end("<h1> Noice </h1>")

//     if(req.url ==="/about"){
//         res.end(`<h1> Love Perctange is ${gernrateLovePerctange()} </h1>`)
//     }
//    else if(req.url==="/"){
//       fs.readFile("./index.html", (err, home)=> {
//         res.end(home)
//       })

//     }
//    else if(req.url==="/contact"){
//         res.end("Contact Page")
//     }
//     else{
//         res.end("Page NOT Found")
//     }

// });

// server.listen(5000,()=>{
//     console.log("server is working")
// });

// started using express

import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "public"))) //for static file

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //  res.send("Hi")
  //  res.statusCode =404;
  // res.sendStatus(404)
  // res.json({
  //     success:true,
  //     prodcuts:[],
  // })
  // res.status(400).send("meri marji ")

//   const pathloction = path.resolve();

//   // res.sendFile(path.join(pathloction, "./index.html"))
//   res.render("index", { name: "Sangam" });

res.render("index", {name: "Dalal"});


});

app.listen(5000, () => {
  console.log("server is working");
});
