const express = require("express");
const app = express();

const pokedex = require("./data/pokedex.json");
const router = require("./router");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use((req, res, next) => {
    res.locals.pokedex = pokedex;
    next();
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server listing at : http://localhost:${PORT}`);
});
