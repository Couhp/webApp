'use strict';

var express = require('express');
var http = require('http');
var router = express.Router();
var adminController = require(process.cwd() + "/app/controllers/index");

router.get("/admin.html", (req, res) => {
    res.sendFile(process.cwd() + '/views/admin.html');
});

router.get("/category/:category", (req, res) => {
    res.sendFile(process.cwd() + '/views/category.html');
})

router.post("/admin.html", adminController.admin);

router.post("/category/:category", adminController.category);


module.exports = router;