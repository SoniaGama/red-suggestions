$(document).ready(loadPage);

var $submit = $("#publish");

// var containerSugg = $("#container-sugg");
// var $time = $("#time");
var $imagePublish = $("#image-publish");
var $comment = $("#comment");

function loadPage () {
  $submit.click(showSugg);
}


function showSugg(){
  var $textUser = $("#text-user");
  var $textUserVal = $textUser.val();
  $textUser.val(" ");

  var d = new Date();
  var n = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
  });

   var time = $("#time").text(Date());
   $comment.append(time);


  console.log(time);

}
