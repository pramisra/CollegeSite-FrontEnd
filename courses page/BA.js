  $(document).ready(function(){
    $("#search-ba").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#bacourses tr").filter(function(){
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  });