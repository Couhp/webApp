$("document").ready(() => {

    var imageSearch = function(query, callback) {
        // console.log("query : " + query);
        $.ajax({
                url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=3&size=medium",
                beforeSend: function(xhrObj) {
                    // Request headers
                    xhrObj.setRequestHeader("Content-Type", "multipart/form-data");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "ef451b67202342fb926fa759de10382b");
                },
                type: "POST",
                // Request body
                data: "{body}",
            })
            .done(function(data) {
                // alert("success");
                // console.log(data);
                callback(data.value["2"].contentUrl, data.value["1"].contentUrl);
            })
            .fail(function() {
                alert("error");
            });
    }

    var createAritcal = function(data, image) {
        var artical = "";

        // artical += "<article class=\"lastartical\"> <h1>" + data.title + "</h1>";
        // if (last == "last")
        //     artical += "<article class=\"lastarticle\"> <h1>" + data.title + "</h1>";
        // else artical += "<article> <h1>" + data.title + "</h1>";
        // artical += "<img src=\"" + image + "\" class=\"smallImage\" \\>";
        // artical += "<p>" + data.content.substring(0, 80) + "..." + "</p>";
        // artical += "<button class=\"rm readMore\" id=\"" + data._id + "\">Read More</button></article>";
        // return artical;
        artical += "<article id=\"singlepost\">";
        artical += "<h1><a>" + data.title + "</a></h1>";
        artical += "<h2>Posted By: <a>" + data.author + "</a><br> On : <a>" + data.timeCreate + "</a></h2>"
        artical += "<h2>Category : " + data.category + "</h2>";
        artical += "<img src=\" " + image[0] + "\" class=\"firstImage\"> ";
        artical += "<p>" + data.content + "</p>";
        artical += "<img src=\" " + image[1] + "\" class=\"firstImage\"> </article>";
        return artical;

    }

    var url = window.location.href.substr(21);
    console.log(url);
    $.post(url, {}, function(data, status) {
        console.log(data);
        imageSearch(data.title, function(img1, img2) {

            $("#article").append(createAritcal(data, [img1, img2]));
        });

    });
})