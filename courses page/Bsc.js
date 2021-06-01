$(document).ready(function(){
    $("#search-bsc").on("keyup",function(){
        var v = $(this).val().toLowerCase();
        // $("#tablebsc th").show();
        $("#tablebsc tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(v) > -1)
        });
    });
});