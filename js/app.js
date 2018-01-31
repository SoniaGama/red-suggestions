//elementos traidos del html
var $submit = $("#publish");
var $btnLogin = $(".boton-login"); //botón iniciar sesión
var $imagePublish = $(".image-publish");
var $comment = $(".comment-prueba");
var init = $(".init");

function loadPage() {
    $("#menu-bars").click(menu);
    // $submit.click(showSugg);
    //$(".avatar").click(changeProfile);
    $(".input-friend").keyup(filterFriends);
    $("#publish").click(showSugg);


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

function showSugg() {
    //traer Elementos
    var $container = $("#container-publish");

    var $textUser = $("#text-user");
    var $textUserVal = $textUser.val();
    $textUser.val(" ");

    // crar elementos
    var $sectionRow = $("<section />", { "class": "row margin" });
    var $divImagePublish = $("<div />", { "class": "image-publish col-xs-offset-1 col-xs-10 post-usser container-img" });
    var $containerComment = $("<section />", { "class": "container-comment col-xs-offset-1 col-xs-10" });
    var $sectionRowComment = $("<section />", { "class": "row" });
    var $divContainerSugg = $("<div />", { "class": "container-sugg col-xs-10" });
    var $pTime = $("<p />", { "class": "time" });
    var $pComment = $("<p />", { "class": "comment" });
    var $divContainerIcons = $("<div />", { "class": "col-xs-2 container-icons" });
    var $divRow = $("<div />", { "class": "row" });
    var $iconEdit = $("<a />", { "class": "edit" });
    var $iconE = $("<i />", { "class": "fa fa-pencil col-sm-3 col-xs-1" });
    $iconE.attr("aria-hidden", "true");
    var $iconStar = $("<a />", { "class": "star" });
    var $iconS = $("<i />", { "class": "fa fa-star col-sm-offset-4 col-sm-2 col-xs-1" });
    $iconE.attr("aria-hidden", "true");
    var $spanCount = $("<span />", { "class": "col-sm-1 col-xs-1" });

    var $time = new Date().toDateString(); //variable que guarda la fecha

    // agregar contenido
    $pTime.text($time);
    $pComment.text($textUserVal);
    $spanCount.text(5);

    // agregarlos al documento

    $sectionRow.append($divImagePublish);
    $sectionRow.append($containerComment);
    $containerComment.append($sectionRowComment);
    $sectionRowComment.append($divContainerSugg);
    $sectionRowComment.append($divContainerIcons);
    $divContainerSugg.append($pTime);
    $divContainerSugg.append($pComment);
    $divContainerIcons.append($divRow);
    $divRow.append($iconEdit);
    $divRow.append($iconStar);
    $divRow.append($spanCount);
    $iconEdit.append($iconE);
    $iconStar.append($iconS);

    $container.prepend($sectionRow);
    // $comment.append($time);

}

//función para pintar el contenedor de neewfeed
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
function login() {
    init.attr
}

//funciones para filtrar amigos y pintarlos
var paintFriend = function(friendsIndice, photoFriend, nameFriend) {
    /* Crear elementos con DOM html*/
    var $divColContain = $("<div />", { "id": "div-friend", "class": "col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" })
    var $divContFriend = $("<div />", { "class": "thumbnail" });
    var $img = $("<img>", { "src": friendsIndice.photo, "alt": "image-friend" });
    var $divCaption = $("<div />", { "class": "caption" });
    var $nameFriend = $("<h3 />");
    var $pButton = $("<p />");
    var $aButton = $("<a />", { "href": "friends.html", "class": "btn btn-primary", "role": "button" });

    /* Asignando valores a los elementos*/
    $nameFriend.text(friendsIndice.name);
    $img.append(photoFriend);
    $aButton.text("Agregar");
    console.log(nameFriend);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $divColContain.append($divContFriend);
    $divContFriend.append($img);
    $divContFriend.append($divCaption);
    $divCaption.append($nameFriend);
    $divCaption.append($pButton);
    $pButton.append($aButton);
    $(".content-friend").prepend($divColContain);

};

var filterFriends = function(friendsIndice) {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var inputFilter = $(".input-friend").val().toLowerCase();
    if ($(".input-friend").val().trim().length > 0) {
        for (var i = 0; i > friends.length; i++) {
            friendsIndice = friends[i];
            //nameFriend = friends[i].name;
            //photoFriend = friends[i].photo;
            //contacts.push(friendsIndice);
            //console.log(friendsIndice);
        }

        var filtederedFriends = friends.filter(function(friendsIndice) {
            return friendsIndice.name.toLowerCase().indexOf(inputFilter) >= 0;
        })
        $(".content-friend").empty();
        filtederedFriends.forEach(function(friendsIndice) {
            paintFriend(friendsIndice);
        });
    } else {
        $(".content-friend").empty();
        friends.forEach(function(friendsIndice) {
            paintFriend(friendsIndice);
        });
    }
    //paintFriend(friendsIndice, photoFriend, nameFriend);
    console.log("filter", filtederedFriends)
}


$(document).ready(loadPage);