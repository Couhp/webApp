var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;

var server = new Server('localhost', 27017, {
    auto_reconnect: true
});
var db = new Db('mydatabase', server);

exports.find = function(name, callback) {
    db.open(function(err, db) {
        db.collection('articals', function(err, collection) {
            collection.find({ 'category': "tech" }).toArray(function(err, docs) {
                var myJson = docs[0];
                callback(myJson);
            })
        })
    })
}