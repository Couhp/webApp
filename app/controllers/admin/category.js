var db = require(process.cwd() + "/app/models/user");

const category = (req, res) => {

    var category = req.params.category;
    if (req.body.message == "getFromCategory") {
        db.getFromCategory(category, 1, function(data) {
            res.json({ data: data });
            // console.log(data);

        });
    }
    if (req.body.message == "delete") {
        console.log(req.body.id);
        db.delete(req.body.id, function() {
            res.json({ message: "deleted" });
        });
    }
}



module.exports = category;