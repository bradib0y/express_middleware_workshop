const express = require("express");
//const fav = require("./fav");
const app = express();
//app.use(fav);

app.use("/one", (req, res, next) => {
    console.log("Middleware One <---");
    return next();
},
(req, res, next) => {
    console.log("Middleware One & a Half <---");
    return next();
})

app.use((req, res, next) => {
    console.log("Middleware Two <---");
    return next();
})

app.use((req, res, next) => {
    console.log("Middleware Three <---");
    return next();
})

app.use((req, res) => res.send('<h1>Express is working</h1>'));
app.listen(3000);

