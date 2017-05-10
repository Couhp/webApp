var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
var ObjectId = require('mongodb').ObjectId;
var server = new Server('localhost', 27017, {
    auto_reconnect: true
});
var db = new Db('mydatabase', server);

exports.find = function(id, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                collection.find(ObjectId(id)).toArray(function(err, docs) {
                    db.close();
                    var myJson = docs[0];
                    callback(myJson);
                })
            })
        }
    })

}

exports.getRandom = function(num, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                collection.find().sort({ _id: -1 }).limit(22).toArray(function(err, docs) {
                    db.close();
                    var list = [];
                    for (var i = 0; i < num; ++i) {
                        var index = Math.round(Math.random() * 20);
                        list.push(docs[index]);
                    }
                    callback(list);
                })
            })
        }
    })
}