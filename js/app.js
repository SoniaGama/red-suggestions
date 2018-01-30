var $submit = $("#publish");

// var containerSugg = $("#container-sugg");
// var $time = $("#time");
var $imagePublish = $("#image-publish");
var $comment = $("#comment");

function loadPage() {
    $("#menu-bars").click(menu);
    $submit.click(showSugg);

}

function menu() {
    if ($(".options").hasClass("hidden")) {
        $(".options").removeClass("hidden");
        $(".options").addClass("show");
    } else {
        $(".options").removeClass("show");
        $(".options").addClass("hidden");
    }
}

function showSugg() {
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


$(document).ready(loadPage);