$(document).ready(function(){
    $("#menu-bars").click(function(){
      if ($(".options").hasClass("hidden")) {
        $(".options").removeClass("hidden");
        $(".options").addClass("show");
      } else {
        $(".options").removeClass("show");
        $(".options").addClass("hidden");
      }
    });
});
