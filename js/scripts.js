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
  var zentangleAnimals = document.getElementById("zentangle-animals-gallery");
  var spaceTravel = document.getElementById("space-travel-gallery");
  var watercolour = document.getElementById("watercolour-gallery");
  var justForFun = document.getElementById("fun-gallery");
  var animalGallery = document.getElementById("zentangle-animals");
  var watercolorGallery = document.getElementById(
    "watercolour-paintings-gallery"
  );

  zentangleAnimals.className = "nav-link gallerynavigation-active";
  spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  justForFun.className = "nav-link gallerynavigation-not-active";
  watercolourGallery.classname = "container-fluid gallery-hide";
  animalGallery.className = "container-fluid gallery-show";
}

function travelSelected() {
  var zentangleAnimals = document.getElementById("zentangle-animals-gallery");
  var spaceTravel = document.getElementById("space-travel-gallery");
  var watercolour = document.getElementById("watercolour-gallery");
  var justForFun = document.getElementById("fun-gallery");
  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  spaceTravel.className = "nav-link gallerynavigation-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  justForFun.className = "nav-link gallerynavigation-not-active";
}

function watercolourSelected() {
  var zentangleAnimals = document.getElementById("zentangle-animals-gallery");
  var spaceTravel = document.getElementById("space-travel-gallery");
  var watercolour = document.getElementById("watercolour-gallery");
  var justForFun = document.getElementById("fun-gallery");
  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-active";
  justForFun.className = "nav-link gallerynavigation-not-active";
}

function funSelected() {
  var zentangleAnimals = document.getElementById("zentangle-animals-gallery");
  var spaceTravel = document.getElementById("space-travel-gallery");
  var watercolour = document.getElementById("watercolour-gallery");
  var justForFun = document.getElementById("fun-gallery");
  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  justForFun.className = "nav-link gallerynavigation-active";
}
