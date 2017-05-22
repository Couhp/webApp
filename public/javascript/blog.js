$("document").ready(function() {



    var gen = function(query, loop, callback) {
        // console.log("query : " + query);
        callback("");
    }

    var createSmallAritcal = function(data, image, last) {
        var artical = "";

        // artical += "<article class=\"lastartical\"> <h1>" + data.title + "</h1>";
        artical += "<div class=\"adcate\"><h1>" + data.title + "</h1>";
        artical += "<img src=\"" + data.image + "\" class=\"smallImage\" \\>";
        artical += "<p>" + data.content.substring(0, 80) + "..." + "</p>";
        // artical += "<button class=\"rm delete\" id=\"" + data.id + "\">Delete</button>";
        artical += "<button class=\"rm read\" id=\"" + data._id + "\">Read</button></div>";
        return artical;
    }
    var url = window.location.href.substr(21);
    $("#category").append("<h1 >" + url.substr(8) + "</h1>");

    $.post(url, { message: "category" }, function(data, status) {
        console.log(data);
        data = data.data;
        var artical = "<div id=\"latestp\">";
        var loop = data.length - 1;
        var runLoop = function(image) {
            if (loop > 0)
                artical += createSmallAritcal(data[loop], image);
            else
                artical += createSmallAritcal(data[loop], image, "last");
            if (loop > 0) {
                loop--;
                console.log(loop);
                gen(data[loop].title, loop, runLoop);
            } else {
                artical += "<//div><br>";
                $("#category").append(artical);
                return;
            }
        }

        gen(data[loop].title, loop, runLoop)
    })
    $(".read").live('click', function() {
        var id = $(this).attr("id");
        window.location = "/mypage/post/" + id;
    })
})