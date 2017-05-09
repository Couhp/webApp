$("document").ready(function() {

    var httpWebRequest = (HttpWebRequest) WebRequest.Create("http://url");
    httpWebRequest.ContentType = "application/json";
    httpWebRequest.Method = "POST";


    $("#add").click(function() {
        window.alert("ok");
    });
});