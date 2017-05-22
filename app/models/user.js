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

exports.setImage = function(id, image, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                // console.log(id);
                collection.update({ _id: ObjectId(id) }, { $set: { image: image } }, function(err, docs) {
                    // console.log(docs);
                    if (err) {
                        console.warn(err.message);
                    }
                    callback();
                    db.close();
                })
            })
        }
    })
}

exports.delete = function(id, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                console.log(id);
                collection.remove({ _id: ObjectId(id) }, { safe: true }, function(err, docs) {
                    callback();
                    db.close();
                })
            })
        }
    })
}


exports.getListCategory = function(callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                // collection.find().distinct('category', function(error, ids) {
                //     // db.close();
                //     callback(ids);
                // })
                collection.distinct('category', function(err, docs) {
                    callback(docs);
                    db.close();
                });
            })
        }
    })
}

exports.getFromCategory = function(category, type, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                collection.find({ category: category }).toArray(function(err, docs) {
                    var out = []
                    for (var i in docs) {
                        var art = {}
                        if (type == 1) {
                            var art = {
                                id: docs[i]._id,
                                title: docs[i].title
                            }
                        } else {
                            art = docs[i]
                        }
                        out.push(art)
                    }

                    callback(out);
                    db.close();
                })
            })
        }
    })
}

exports.add = function(data, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                // console.log(id);
                console.log(data);
                var id = Math.round(Math.random() * 10000);
                collection.insert(data, { w: 1 }, function(err, docs) {
                    // console.log(docs);

                    callback()
                    db.close();
                })
            })
        }
    })
}

exports.delete = function(id, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                console.log(id);
                collection.remove({ _id: ObjectId(id) }, { safe: true }, function(err, docs) {
                    callback();
                    db.close();
                })
            })
        }
    })
}

exports.getRandom = function(num, number, callback) {
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                collection.find().sort({ _id: -1 }).limit(100).toArray(function(err, docs) {
                    db.close();
                    var list = [];
                    for (var i = num * number; i < num * number + num; ++i) {
                        list.push(docs[i]);
                    }
                    callback(list);
                })
            })
        }
    })
}

exports.search = function(key, callback) {
    console.log(key);
    db.open(function(err, db) {
        if (!err) {
            db.collection('articals', function(err, collection) {
                collection.find().sort({ _id: -1 }).limit(100).toArray(function(err, docs) {
                    db.close();
                    var list = [];
                    for (var i in docs) {
                        if (docs[i].content != undefined) {
                            var value = docs[i].content;
                            if (value.indexOf(key) !== -1) list.push(docs[i]);
                        }
                    }
                    callback(list);
                })
            })
        }
    })
}