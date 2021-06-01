$(document).ready(function(){
   $("div#icon").click(function(){
        $("div.sidepanel").css("width","250px");
   });
});


$(document).ready(function(){
    $("div a.closebtn").click(function(){
           $("div.sidepanel").css("width","0px");
            });
});

// function opennav()
// {
//     document.getElementById("mysidepanel").style.width = "250px";
// }

// function closenav()
// {
//     document.getElementById("mysidepanel").style.width = "0px";
// }