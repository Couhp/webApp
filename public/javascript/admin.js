$("document").ready(function() {
    console.log("fuck");
    $("#displayAdd").hide();
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

        var docs = getFormData($("#form"));
        // var data = { 1: 12 };
        console.log("::", docs);
        $.post("/admin/admin.html", { message: "add", data: JSON.stringify(docs) },
            function(data, status) {
                console.log(data.message);

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
                $("#cate").append(categoryList);
            });
    });

    $("p").on('click', "button.category", function() {
        var category = $(this).attr('id');
        window.location = "/admin/category/" + category;
    });

    $("#add").on('click', function() {
        $("#displayAdd").show();
    })


});