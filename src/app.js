/*const express = require('express');

const app = express();

const PORT = 8092;






app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
}) */

const Pathfinder = require("./pathfinder");
const plan = require("./example_bielefeld/stations_bielefeld.json");
const start = Pathfinder.getStation("Schildesche", plan);
console.log(start);
const path = Pathfinder.find(start, "Innenstadt", null ,plan, []);
console.log(path);