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
  var zentangleAnimals = document.getElementById("nav-zentangle-animals-gallery");
  // var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  // var justForFun = document.getElementById("nav-fun-gallery");

  var animalGallery = document.getElementById("container-zentangle-animals");
  // var travelGallery = document.getElementById("container-travel");
  var watercolourGallery = document.getElementById("container-watercolour");
  // var sideprojectsGallery = document.getElementById("container-sideprojects");

  zentangleAnimals.className = "nav-link gallerynavigation-active";
  // spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-not-active";
  // justForFun.className = "nav-link gallerynavigation-not-active";

  animalGallery.className = "container-fluid gallery-show";
  watercolourGallery.className = "container-fluid gallery-hide";
  // sideprojectsGallery.className = "container-fluid gallery-hide";
  // travelGallery.className = "container-fluid gallery-hide";
}

// function travelSelected() {
//   var zentangleAnimals = document.getElementById(
//     "nav-zentangle-animals-gallery"
//   );
//   var spaceTravel = document.getElementById("nav-space-travel-gallery");
//   var watercolour = document.getElementById("nav-watercolourpainting-gallery");
//   var justForFun = document.getElementById("nav-fun-gallery");

//   var animalGallery = document.getElementById("container-zentangle-animals");
//   var travelGallery = document.getElementById("container-travel");
//   var watercolourGallery = document.getElementById("container-watercolour");
//   var sideprojectsGallery = document.getElementById("container-sideprojects");

//   zentangleAnimals.className = "nav-link gallerynavigation-not-active";
//   spaceTravel.className = "nav-link gallerynavigation-active";
//   watercolour.className = "nav-link gallerynavigation-not-active";
//   justForFun.className = "nav-link gallerynavigation-not-active";

//   animalGallery.className = "container-fluid gallery-hide";
//   watercolourGallery.className = "container-fluid gallery-hide";
//   sideprojectsGallery.className = "container-fluid gallery-hide";
//   travelGallery.className = "container-fluid gallery-show";
// }

function watercolourSelected() {
  var zentangleAnimals = document.getElementById("nav-zentangle-animals-gallery");
  // var spaceTravel = document.getElementById("nav-space-travel-gallery");
  var watercolour = document.getElementById("nav-watercolourpainting-gallery");
  // var justForFun = document.getElementById("nav-fun-gallery");

  var animalGallery = document.getElementById("container-zentangle-animals");
  // var travelGallery = document.getElementById("container-travel");
  var watercolourGallery = document.getElementById("container-watercolour");
  // var sideprojectsGallery = document.getElementById("container-sideprojects");

  zentangleAnimals.className = "nav-link gallerynavigation-not-active";
  // spaceTravel.className = "nav-link gallerynavigation-not-active";
  watercolour.className = "nav-link gallerynavigation-active";
  // justForFun.className = "nav-link gallerynavigation-not-active";

  animalGallery.className = "container-fluid gallery-hide";
  watercolourGallery.className = "container-fluid gallery-show";
  // sideprojectsGallery.className = "container-fluid gallery-hide";
  // travelGallery.className = "container-fluid gallery-hide";
}

// function funSelected() {
//   var zentangleAnimals = document.getElementById(
//     "nav-zentangle-animals-gallery"
//   );
//   var spaceTravel = document.getElementById("nav-space-travel-gallery");
//   var watercolour = document.getElementById("nav-watercolourpainting-gallery");
//   var justForFun = document.getElementById("nav-fun-gallery");

//   var animalGallery = document.getElementById("container-zentangle-animals");
//   var travelGallery = document.getElementById("container-travel");
//   var watercolourGallery = document.getElementById("container-watercolour");
//   var sideprojectsGallery = document.getElementById("container-sideprojects");

//   zentangleAnimals.className = "nav-link gallerynavigation-not-active";
//   spaceTravel.className = "nav-link gallerynavigation-not-active";
//   watercolour.className = "nav-link gallerynavigation-not-active";
//   justForFun.className = "nav-link gallerynavigation-active";

//   animalGallery.className = "container-fluid gallery-hide";
//   watercolourGallery.className = "container-fluid gallery-hide";
//   sideprojectsGallery.className = "container-fluid gallery-show";
//   travelGallery.className = "container-fluid gallery-hide";
// }

function booksSelected() {
  var books = document.getElementById("nav-shop-books");
  var prints = document.getElementById("nav-shop-prints");
  var booksGallery = document.getElementById("booksGallery");
  var printsGalleryTitle = document.getElementById("printsGalleryTitle");
  var printsGalleryProducts = document.getElementById("printsGalleryProducts");

  books.className = "nav-link gallerynavigation-active";
  prints.className = "nav-link gallerynavigation-not-active";
  printsGalleryTitle.className = "container-fluid secondarypages-description gallery-hide";
  printsGalleryProducts.className = "row gutter-small shopify-hide";
  booksGallery.className = "row gutter-small";
}

function printsSelected() {
  var books = document.getElementById("nav-shop-books");
  var prints = document.getElementById("nav-shop-prints");
  var booksGallery = document.getElementById("booksGallery");
  var printsGalleryTitle = document.getElementById("printsGalleryTitle");
  var printsGalleryProducts = document.getElementById("printsGalleryProducts");

  prints.className = "nav-link gallerynavigation-active";
  books.className = "nav-link gallerynavigation-not-active";
  booksGallery.className = "row gutter-small shopify-hide";
  printsGalleryTitle.className = "container-fluid secondarypages-description gallery-show";
  printsGalleryProducts.className = "row gutter-small gallery-show";
}
