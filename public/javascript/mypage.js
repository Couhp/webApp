$(document).ready(() => {

    var number = -1;
    var imageSearch = function(query, loop, image, callback) {
        // console.log("query : " + query);
        console.log("image : " + image);
        if (image == "auto" || image == "") {
            $.ajax({
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + query + "&count=2&size=small",
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
                    if (data.value[1] == null) callback("");
                    else
                        callback(data.value["1"].contentUrl);
                })
                .fail(function() {
                    callback("");
                });
        } else {
            callback(image);
        }
    }


    var createSmallAritcal = function(data, image, last) {
        var artical = "";
        if (data.image == "auto" || data.image == "") {
            $.post("/mypage", { message: "setImage", id: data._id, image: image }, function(data, status) {
                console.log(data.message);
            })
        }
        // artical += "<article class=\"lastartical\"> <h1>" + data.title + "</h1>";
        if (last == "last")
            artical += "<article class=\"lastarticle\"> <h1>" + data.title + "</h1>";
        else artical += "<article> <h1>" + data.title + "</h1>";
        artical += "<img src=\"" + image + "\" class=\"smallImage\" \\>";
        artical += "<p>" + data.content.substring(0, 70) + "..." + "</p>";
        artical += "<button class=\"rm readMore\" id=\"" + data._id + "\">Read More</button></article>";
        return artical;
    }

    $("div").on('click', "button.readMore", function() {

        var id = $(this).attr('id')
        window.location = "/mypage/post/" + id;
    });


    $("#moreArticals").on('click', function() {
        number++;
        $.post("/mypage", { message: "moreArticals", number: number },
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
                        imageSearch(data[loop].title, loop, data[loop].image, runLoop);
                    } else {
                        artical += "<//div><br>";
                        $("#smallArtical").append(artical);
                        return;
                    }
                }

                imageSearch(data[loop].title, loop, data[loop].image, runLoop)
            })
    })

    $("#search_btn").on("click", function() {
        var search = $("#search").val();
        console.log(search);
    })

});