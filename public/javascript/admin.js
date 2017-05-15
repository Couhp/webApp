$("document").ready(function() {
    console.log("fuck");
    ///////////////////////////////////////////////////////////////////
    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function(n, i) {
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

    //////////////////////////////////////////////////////////////////////
    /**
     * Send data to server
     */

    $("#btn").on('click', (function() {

        var data = getFormData($("#form"));
        console.log(data);
        $.post("/admin/admin.html",
            data,
            function(data, status) {
                $("p").append(data.message);

            });
    }));

    $("#category").on('click', function() {
        $.post("/admin/admin.html", { message: "getCategory" },
            function(data, status) {
                data = data.data;

                var categoryList = "";
                for (var i in data) {
                    categoryList += "<button class=\"rm category\" id=\"" + data[i] + "\">" + data[i] + "</button><br>";
                }
                $(".adcate").append(categoryList);
            });
    });

    $("p").on('click', "button.category", function() {
        var category = $(this).attr('id');
        window.location = "/admin/category/" + category;
    });

});