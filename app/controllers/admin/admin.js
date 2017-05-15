var db = require(process.cwd() + "/app/models/user");

const admin = (req, res) => {
    if (req.body.message == "getCategory") {
        db.getListCategory(function(data) {
            res.json({ data: data });
        });
    }
}



module.exports = admin;