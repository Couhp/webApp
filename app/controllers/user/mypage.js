var myconsole = require(process.cwd() + "/app/models/user");
var db = require(process.cwd() + "/app/models/user");

const myPage = (req, res) => {
    if (req.body.message == "moreArticals") {
        db.getRandom(4, function(data) {
            res.json({ data: data });
        })
    }
}



module.exports = myPage;