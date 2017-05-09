var myconsole = require("./app/models/user");

myconsole.find(" ", function(data) {
    console.log(data);
})