'use strict';

var express = require('express');
var http = require('http');
var router = express.Router();

router.get("/admin.html", (req, res) => {
    res.sendFile(process.cwd() + '/views/admin.html');
});

router.post("/admin.html", (req, res) => {
    console.log(req.body);
    res.json({ "message": "done" });
});

module.exports = router;