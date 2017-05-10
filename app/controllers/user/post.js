var db = require(process.cwd() + "/app/models/user");

const post = (req, res) => {
    var id = req.params.id;
    db.find(id, function(data) {
        res.json(data);
    })
}



module.exports = post;