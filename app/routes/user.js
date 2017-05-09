'use strict';
/**
 * THE USER ROUTER
 * 
 * "localhost:8080/mypage/"
 */
var express = require('express');
var http = require('http');
var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

router.get("/post", (req, res) => {
    res.sendFile(process.cwd() + '/views/singlepost.html');
});

router.post("/", (req, res) => {
    if (req.body.message == "moreArticals") {
        console.log("received");
        var data = "<h1>Lorem Ipsum Dolor Sit</h1>";
        res.json({ "data": data });
    }
})



module.exports = router;