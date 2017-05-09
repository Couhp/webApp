'use strict';

const myPage = require(process.cwd() + "/app/controllers/user/mypage");
// const login = require(global.__base + 'app/controllers/user/login');
// const logout = require(global.__base + 'app/controllers/user/logout');

const userController = {
    myPage: myPage
        // login: login,
        // signup: signup,
        // logout: logout
};

module.exports = userController;