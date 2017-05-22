var db = require(process.cwd() + "/app/models/user");

const admin = (req, res) => {
    if (req.body.message == "getCategory") {
        db.getListCategory(function(data) {
            res.json({ data: data });
        });
    }

    if (req.body.message == "add") {
        var data = JSON.parse(req.body.data);
        // console.log("data : " + data);
        db.add(data, function() {
            res.end("added");
        })

    }
}



module.exports = admin;