'use strict';

const express = require('express');
const router = express.Router();


const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const playlist = require('./controllers/playlist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deleteSong/:songid', playlist.deleteSong);

module.exports = router;