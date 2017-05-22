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
    var search = req.param("search");
    if (search == undefined)
        res.sendFile(process.cwd() + '/views/index.html');
    else res.sendFile(process.cwd() + '/views/search.html');
});

router.get("/post/:id", (req, res) => {
    res.sendFile(process.cwd() + '/views/singlepost.html');
});


router.get("/:category", (req, res) => {
    res.sendFile(process.cwd() + '/views/blog.html');
})



router.post("/post/:id", userController.post)

router.post("/", userController.myPage)
router.post("/:category", userController.myPage)


// router.get("", (req,res) => {
//     req.body.message == "getArtical"
// })


module.exports = router;