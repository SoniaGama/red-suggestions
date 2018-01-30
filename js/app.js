//elementos traidos del html
var $submit = $("#publish");
var $btnLogin = $(".boton-login"); //botón iniciar sesión

// var containerSugg = $("#container-sugg");
// var $time = $("#time");
var $imagePublish = $("#image-publish");
var $comment = $("#comment");

//función que contiene todas las funciones y se cargarán al cargar la página
function loadPage() {
    $("#menu-bars").click(menu);
    $submit.click(showSugg);

}

//función para mostrar menu desplegable del header
function menu() {
    if ($(".options").hasClass("hidden")) {
        $(".options").removeClass("hidden");
        $(".options").addClass("show");
    } else {
        $(".options").removeClass("show");
        $(".options").addClass("hidden");
    }
}

//función para mostrar el post en el perfil de usuario
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

    paintPostUser(textUserVal);

}

//función para pintar el contenedor de la publicación del usuario
function paintPostUser(textUserVal) {
    //llamando elementos a pintar
    var $divImg = $("<div />", { "id": "image-publish", "class": "col-xs-offset-1 col-xs-10 post-usser container-img" });
    var $imgPost = $("<img>", { "alt": "lugar-recomendado" });
    var $sectionComment = $("<section />", { "class": "col-xs-offset-1 col-xs-10 container-comment" });
    var $sectionRow = $("<section />", { "class": "row" });
    var $divCol10 = $("div />", { "id": "container-sugg", "class": "col-xs-10" });
    var $pTime = $("<p />", { "id": "time" });
    var $pComment = $("<p />", { "id": "comment" });
    var $divCol2 = $("<div />", { "class": "col-xs-2 container-icons" });
    var $divRow = $("<div />", { "class": "row" });
    var $spanCalif = $("<span />", { "class": "col-sm-1 col-xs-1" });

    //append de elementos
    $divRow.append($spanCalif);
    $divCol2.append($divCol2);
    $sectionRow.append($divCol2);
    $pComment.append($divCol10);
    $pTime.append($divCol10);
    $sectionRow.append($divCol10);
    $sectionRow.append($divCol2);
    $sectionComment.append($sectionRow);
    $imgPost.append($divImg);

    //agregando elementos en un contenedor existente en html
    $("#container-comment").prepend($divImg);
    $("#container-comment").prepend($sectionComment);
}

//función para iniciar sesión
function login() {}


$(document).ready(loadPage);