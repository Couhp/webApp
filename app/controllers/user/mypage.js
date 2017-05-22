var db = require(process.cwd() + "/app/models/user");

const myPage = (req, res) => {
    if (req.body.message == "moreArticals") {
        db.getRandom(4, req.body.number, function(data) {
            res.json({ data: data });
        })
    }

    if (req.body.message == "setImage") {
        db.setImage(req.body.id, req.body.image, function() {
            res.json({ "message": "image setted" });
        })
    }
    var category = req.params.category;
    if (req.body.message == "category") {
        db.getFromCategory(category, 2, function(data) {
            res.json({ data: data });
            // console.log(data);

        });
    }

    var key = req.param("search");
    if (req.body.message == "search") {
        db.search(key, function(data) {
            res.json({ data: data });
            // console.log(data);

        });
    }

}



module.exports = myPage;