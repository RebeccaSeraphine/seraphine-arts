$(document).ready(function () {
  $(".carousel").carousel("pause");
});

/* Carousel auto play
$(document).ready(function() {
    $('#mycarousel').carousel({
        interval: 10
    })

}); */

// Sub-Navigation for Gallery view

function animalsSelected() {
  var zentangleAnimals = document.getElementById(
    "nav-zentangle-animals-gallery"
  );
  // var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  // var justForFun = document.getElementById("nav-fun-gallery");
  var animalGallery = document.getElementById("container-zentangle-animals");
  var watercolourGallery = document.getElementById("container-watercolour");

  zentangleAnimals.className = "nav-link gallerynavigation-active";
  // spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  // justForFun.className = "nav-link gallerynavigation-not-active";
  animalGallery.className = "container-fluid gallery-show";
  watercolourGallery.className = "container-fluid gallery-hide";
}

function watercolourSelected() {
  var zentangleAnimals = document.getElementById(
    "nav-zentangle-animals-gallery"
  );
  // var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  // var justForFun = document.getElementById("nav-fun-gallery");
  var animalGallery = document.getElementById("container-zentangle-animals");
  var watercolourGallery = document.getElementById("container-watercolour");

  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  // spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-active";
  // justForFun.className = "nav-link gallerynavigation-not-active";
  animalGallery.className = "container-fluid gallery-hide";
  watercolourGallery.className = "container-fluid gallery-show";
}
/*
function travelSelected() {
  var zentangleAnimals = document.getElementById(
    "nav-zentangle-animals-gallery"
  );
  var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  var justForFun = document.getElementById("nav-fun-gallery");
  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  spaceTravel.className = "nav-link gallerynavigation-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  justForFun.className = "nav-link gallerynavigation-not-active";
}

function funSelected() {
  var zentangleAnimals = document.getElementById(
    "nav-zentangle-animals-gallery"
  );
  var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  var justForFun = document.getElementById("nav-fun-gallery");
  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  justForFun.className = "nav-link gallerynavigation-active";
}
*/
