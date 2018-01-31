//Firebase
var config = {
    apiKey: "AIzaSyCsPtmB9oyd1nKnA5cuN5dx9uGXgNgD6Hs",
    authDomain: "airbnb-da07c.firebaseapp.com",
    databaseURL: "https://airbnb-da07c.firebaseio.com",
    projectId: "airbnb-da07c",
    storageBucket: "airbnb-da07c.appspot.com",
    messagingSenderId: "289392080208"
  };
  firebase.initializeApp(config);

//elementos traidos del html
var $submit = $("#publish");
var $btnLogin = $(".boton-login"); //botón iniciar sesión
var $imagePublish = $(".image-publish");
// var $comment = $(".comment-prueba");
var init = $(".init");

function loadPage () {
  $("#menu-bars").click(menu);
  $(".logo-mini").click(changeIcon);
  $("#publish").click(showSugg);
  $(".init").click(login);
  $("#unload-fire-base").change(unloadImage);
}

 //cargar imagenes a firebase
function unloadImage(event){
  var fileImage =  event.target.files[0];
  // console.log(fileImage);
  var storageRef = firebase.storage().ref("images/"+fileImage.name);
  // console.log(firebase.storage);
  var unloadImg = storageRef.put(fileImage);
}



//función para iniciar sesión
function login() {
  // $(".init-prueba").attr("href","newsfeed.html");
  // location.href = "newsfeed.html";
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

function showSugg () {
  //traer Elementos
  var $container = $("#container-publish");

  var $textUser = $("#text-user");
  var $textUserVal = $textUser.val();
  $textUser.val(" ");

   // crar elementos
   var $sectionRow = $("<section />", {"class":"row margin"});
      var $divImagePublish = $("<div />",{"class":"image-publish col-xs-offset-1 col-xs-10 post-usser container-img"});
      var $containerComment = $("<section />", {"class":"container-comment col-xs-offset-1 col-xs-10"});
        var $sectionRowComment = $("<section />",{"class":"row"});
           var $divContainerSugg = $("<div />",{"class":"container-sugg col-xs-10"});
              var $pTime = $("<p />",{"class":"time"});
              var $pComment = $("<p />",{"class":"comment"});
           var $divContainerIcons = $("<div />",{"class":"col-xs-2 container-icons"});
              var $divRow = $("<div />",{"class":"row"});
                 var $iconEdit = $("<a />", {"class":"edit"});
                    var $iconE = $("<i />", {"class":"fa fa-pencil col-sm-3 col-xs-1"});
                    $iconE.attr("aria-hidden","true");
                 var $iconStar = $("<a />", {"class":"star"});
                    var $iconS = $("<i />", {"class":"fa fa-star col-sm-offset-4 col-sm-2 col-xs-1"});
                    $iconE.attr("aria-hidden","true");
                 var $spanCount = $("<span />", {"class":"col-sm-1 col-xs-1"});

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



//funciones para cambiar del perfil de usuario al newsfeed
function changeProfile() {
    if ($(".imagotipo").hasClass("hidden")) {
        $(".imagotipo").removeClass("hidden");
        $(".imagotipo").addClass("show");
        $(".avatar").removeClass("show");
        $(".avatar").addClass("hidden");
    }
}

function changeIcon() {
    if ($(".avatar-mini").hasClass("hidden")) {
        $(".avatar-mini").removeClass("hidden");
        $(".avatar-mini").addClass("show");
        $(".logo-mini").removeClass("show");
        $(".logo-mini").addClass("hidden");
    }
}


//función para pintar el contenedor de neewfeed
function paintNewsFeed(textUserVal) {
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



$(document).ready(loadPage);
