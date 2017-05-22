var MongoClient = require('mongodb').MongoClient
var fs = require('fs')

var URL = 'mongodb://localhost:27017/mydatabase'

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}


MongoClient.connect(URL, function(err, db) {
    if (err) console.log(err)

    //db.createCollection("articals");
    var collection = db.collection('articals');
    var path = "/home/luuphuoc/Documents/bbc (2)/business";

    for (var i = 18; i < 23; ++i) {
        data = fs.readFileSync(path + "/0" + i + ".txt", 'utf8');

        var title = data.split('\n')[0];
        var timeCreate = getDateTime();
        var author = "No info";
        var image = "auto";
        var content = data;
        var category = "business";
        //console.log(content);
        var artical = {
            title: title,
            timeCreate: timeCreate,
            author: author,
            image: image,
            category: category,
            content: content
        };

        collection.insert(artical);

    }

    // collection.find({ category: 'business' }).toArray(function(err, docs) {
    //     console.log(docs)
    //     db.close()
    // })
    db.close();
})

// router.get('/fullwidth.html', (req, res) => {
//     res.sendFile(process.cwd() + '/views/fullwidth.html');
// });