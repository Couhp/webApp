'use strict';
/**
 * THE INDEX ROUTER
 */
var express = require('express');
var router = express.Router();

const adminRouter = require("./admin");
const userRouter = require("./user")

router.use('/admin', adminRouter);
router.use('/mypage', userRouter);

module.exports = router;