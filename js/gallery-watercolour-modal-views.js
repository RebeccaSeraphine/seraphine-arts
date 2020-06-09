var modalViewsWatercolour = document.getElementById("script-modal-views-watercolour").innerHTML;

var template = Handlebars.compile(modalViewsWatercolour);

var modalDataWatercolour = template({
  images: [
    // Spirits of the sea
    {
      name: "Lady Manta",
      date: "2019",
      src: "public/images/gallery/lady-manta.jpg",
      alt: "manta woman watercolour",
      id: "w-manta-woman",
    },
    {
      name: "Turtle Priestess",
      date: "2019",
      src: "public/images/gallery/turtle-priestess.jpg",
      alt: "turtle woman watercolour",
      id: "w-turtle-woman",
    },
    {
      name: "Seahorse Guardian",
      date: "2019",
      src: "public/images/gallery/seahorse-guardian.jpg",
      alt: "seahorse woman watercolour",
      id: "w-seahorse-woman",
    },
    // Single
    {
      name: "Vietnamese Dancer",
      date: "2019",
      src: "public/images/gallery/vietnamese-girl.jpg",
      alt: "dancing vietnamese girl painting",
      id: "w-vietnamesedancer",
    },
    // Patterns of Nature
    {
      name: "Patterns of Nature - Lion",
      date: "2018",
      src: "public/images/gallery/lion.jpg",
      alt: "lion watercolour",
      id: "w-lion",
    },
    {
      name: "Patterns of Nature - Wolf",
      date: "2018",
      src: "public/images/gallery/wolf.jpg",
      alt: "wolf watercolour",
      id: "w-wolf",
    },
    {
      name: "Patterns of Nature - Monkey",
      date: "2018",
      src: "public/images/gallery/monkey.jpg",
      alt: "monkey watercolour",
      id: "w-monkey",
    },
    {
      name: "Patterns of Nature - Monstera Leaf",
      date: "2018",
      src: "public/images/gallery/monstera-leaf.jpg",
      alt: "monstera watercolour painting",
      id: "w-monstera",
    },
    // Single
    {
      name: "Bamboo Forest",
      date: "2019",
      src: "public/images/gallery/bamboo-forest.jpg",
      alt: "bamboo watercolor painting",
      id: "w-bambooforest",
    },
  ],
});

document.getElementById("div-modalViews-watercolour").innerHTML += modalDataWatercolour;
