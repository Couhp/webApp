var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:27017/mydatabase'

MongoClient.connect(URL, function(err, db) {
    if (err) console.log(err)
    console.log("ok")
    var collection = db.collection('foods')
    collection.insert({ name: 'taco', tasty: false })

    collection.find({ name: 'taco' }).toArray(function(err, docs) {
        console.log(docs)
        db.close()
    })
})

router.get('/fullwidth.html', (req, res) => {
    res.sendFile(process.cwd() + '/views/fullwidth.html');
});