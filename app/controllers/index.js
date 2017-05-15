'use strict';

const myPage = require(process.cwd() + "/app/controllers/user/mypage");
const post = require(process.cwd() + "/app/controllers/user/post");
const admin = require(process.cwd() + "/app/controllers/admin/admin");
const category = require(process.cwd() + "/app/controllers/admin/category");
// const login = require(global.__base + 'app/controllers/user/login');
// const logout = require(global.__base + 'app/controllers/user/logout');

const controller = {
    myPage: myPage,
    post: post,
    admin: admin,
    category: category
        // login: login,
        // signup: signup,
        // logout: logout
};

module.exports = controller;