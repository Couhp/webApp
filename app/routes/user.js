'use strict';
/**
 * THE USER ROUTER
 * 
 * "localhost:8080/mypage/"
 */
var express = require('express');
var http = require('http');
var router = express.Router();
var userController = require(process.cwd() + "/app/controllers/index");

router.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

router.get("/post", (req, res) => {
    res.sendFile(process.cwd() + '/views/singlepost.html');
});

router.post("/", userController.myPage)

// router.get("", (req,res) => {
//     req.body.message == "getArtical"
// })


module.exports = router;