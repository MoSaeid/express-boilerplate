const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');

router.route('/')
    .get((req, res) => {
        res.render('./foo/page1');
    })

module.exports = router;