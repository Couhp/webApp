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
                $("#latestp").append(data.data);

            }
        )

    })

});