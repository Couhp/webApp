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


});