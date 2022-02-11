const express = require('express');
const Pathfinder = require('../pathfinder');
const bielefeldRouter = express.Router();

const planBielefeld = require('./stations_bielefeld.json');

bielefeldRouter.get('/', (req, res, next) => {
    res.status(200).send(planBielefeld);
})

bielefeldRouter.get('/:start/:end', (req, res, next) => {
    const start = req.params.start;
    const end = req.params.end;
    console.log(`Start: ${start}`);
    console.log(`End: ${end}`);

    const way = Pathfinder.find(start, end, planBielefeld);

    if (way.includes(start) && way.includes(end)){
        res.status(200).send(way);
    } else {
        res.status(404).send();
    }
})

module.exports = bielefeldRouter;