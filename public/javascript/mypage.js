$("document").ready(() => {
    $(".readMore").on('click', function() {
        window.location = "/mypage/post";
    });

    $("#moreArticals").on('click', function() {
        $.post("/mypage", { message: "moreArticals" },
            function(data, status) {
                /**
                 * Processing data received from Server
                 */
                console.log(data);
                var artical = "<div id=\"latestp\">";
                for (var i = 0; i < 4; ++i) {
                    if (i == 3)
                        artical += "<article class=\"lastartical\"> <h1>" + data.data[i].title + "</h1>";
                    else artical += "<article> <h1>" + data.data[i].title + "</h1>";
                    artical += "<img src=\"/public/images/1s.jpg\" class=\"smallImage\" \\>";
                    artical += "<p>" + data.data[i].content.substring(0, 30) + "..." + "</p>";
                    artical += "<a class=\"rm readMore\">Read More</a></article>";
                }
                artical += "<//div>";
                $("#smallArtical").append(artical);

            }
        )

    })

});