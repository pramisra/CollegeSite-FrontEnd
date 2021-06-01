$(document).ready(function () {
    $("#timingmsc h3 a.iconplus").on("click",function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).reday(function(){
    $("#timingmsc h3 a.iconplus").hover(function(){
        $("#timingmsc h3 a.iconplus").tooltip();
    });
});