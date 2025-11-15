const express = require('express');
const router = express.Router();

const paulo = require('./paulo');
const ryan = require('./ryan');
const rafael = require('./rafael');
const julio = require('./julio');
const maxsuel = require('./maxsuel');

router.use('/', paulo);
router.use('/', ryan);
router.use('/', rafael);
router.use('/', julio);
router.use('/', maxsuel);

module.exports = router;