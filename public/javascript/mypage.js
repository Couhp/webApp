$(document).ready(() => {


    var imageSearch = function(query, loop, callback) {
        // console.log("query : " + query);
        $.ajax({
                url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=2",
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
                callback(data.value["1"].contentUrl);
            })
            .fail(function() {
                alert("error");
            });
    }


    var createSmallAritcal = function(data, image, last) {
        var artical = "";

        // artical += "<article class=\"lastartical\"> <h1>" + data.title + "</h1>";
        if (last == "last")
            artical += "<article class=\"lastarticle\"> <h1>" + data.title + "</h1>";
        else artical += "<article> <h1>" + data.title + "</h1>";
        artical += "<img src=\"" + image + "\" class=\"smallImage\" \\>";
        artical += "<p>" + data.content.substring(0, 80) + "..." + "</p>";
        artical += "<button class=\"rm readMore\" id=\"" + data._id + "\">Read More</button></article>";
        return artical;
    }

    $("div").on('click', "button.readMore", function() {

        var id = $(this).attr('id')
        window.location = "/mypage/post/" + id;
    });


    $("#moreArticals").on('click', function() {
        $.post("/mypage", { message: "moreArticals" },
            function(data, status) {
                /**
                 * Processing data received from Server
                 */
                console.log(data);
                data = data.data;
                var artical = "<div id=\"latestp\">";
                var loop = 3
                var runLoop = function(image) {
                    if (loop > 0)
                        artical += createSmallAritcal(data[loop], image);
                    else
                        artical += createSmallAritcal(data[loop], image, "last");
                    if (loop > 0) {
                        loop--;
                        console.log(loop);
                        imageSearch(data[loop].title, loop, runLoop);
                    } else {
                        artical += "<//div><br>";
                        $("#smallArtical").append(artical);
                        return;
                    }
                }

                imageSearch(data[loop].title, loop, runLoop)
            })
    })

});