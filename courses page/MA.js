$(document).ready(function(){
    $("#search-ma").on("keyup",function(){
        var v1 = $(this).val().toLowerCase();
        $("#tablema tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(v1) > -1);
        });
    });
});