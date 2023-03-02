const express = require("express");
const controller = require("./controllers/controller");
const pokedex = require("./data/pokedex.json");

const router = express.Router();

router.get("/", controller.renderHomePage);

router.get("/details/:pokemonId", controller.renderDetailsPage);

router.get("/types", controller.renderTypePage);

router.get("/listDetails/:type", controller.renderTypeDetailsPage);

router.get("/listDetails", controller.searchPokemonByName);

module.exports = router;
