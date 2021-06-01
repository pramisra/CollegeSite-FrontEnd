$(document).ready(function(){
    $("#search-bcom").on("keyup",function(){
        var va = $(this).val().toLowerCase();
        $("#tablebcom tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(va) >-1)
        });
    });
});