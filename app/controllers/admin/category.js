var db = require(process.cwd() + "/app/models/user");

const category = (req, res) => {

    var category = req.params.category;
    if (req.body.message == "getFromCategory") {
        db.getFromCategory(category, function(data) {
            res.json({ data: data });
            // console.log(data);

        });
    }
}



module.exports = category;