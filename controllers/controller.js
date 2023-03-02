const controller = {
    renderHomePage : (req,res) =>{
        res.render("home");
    },
    renderDetailsPage : (req,res) =>{
        const pokemonId = parseInt(req.params.pokemonId,10);
        const requestedPokemon = pokedex.find(pokemon => pokemon.numero === pokemonId);
        res.render("details", {pokemon: requestedPokemon});
    },
    renderTypePage : (req,res) =>{
        res.render("typeList");
    },
    renderTypeDetailsPage: (req,res) =>{
        const type = req.params.type;
        const requestedPokemon = pokedex.filter(pokemon => pokemon.type.includes(type));
        res.render("listDetails", {pokemonType: requestedPokemon});
    },
    searchPokemonByName: (req,res)=>{
        const name = req.query.nom;
        const requestedPokemon = pokedex.filter(pokemon => pokemon.nom.toLocaleLowerCase().includes(name));
        res.render("listDetails", {pokemonType: requestedPokemon});
    }
};

const pokedex = require("../data/pokedex.json");

module.exports = controller;
