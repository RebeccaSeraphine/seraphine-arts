var watercolourGallery = document.getElementById("script-watercolour-gallery")
  .innerHTML;

var template = Handlebars.compile(watercolourGallery);

var watercolourData = template({
  images: [
    // Spirits of the sea
    {
      name: "Lady Manta",
      date: "2019",
      src: "public/images/gallery/lady-manta.jpg",
      alt: "manta woman watercolour",
    },
    {
      name: "Turtle Priestess",
      date: "2019",
      src: "public/images/gallery/turtle-priestess.jpg",
      alt: "turtle woman watercolour",
    },
    {
      name: "Seahorse Guardian",
      date: "2019",
      src: "public/images/gallery/seahorse-guardian.jpg",
      alt: "seahorse woman watercolour",
    },
    // Single
    {
      name: "Vietnamese Dancer",
      date: "2019",
      src: "public/images/gallery/vietnamese-girl.jpg",
      alt: "dancing vietnamese girl painting",
    },
    // Patterns of Nature
    {
      name: "Patterns of Nature - Lion",
      date: "2018",
      src: "public/images/gallery/lion.jpg",
      alt: "lion watercolour",
    },
    {
      name: "Patterns of Nature - Wolf",
      date: "2018",
      src: "public/images/gallery/wolf.jpg",
      alt: "wolf watercolour",
    },
    {
      name: "Patterns of Nature - Monkey",
      date: "2018",
      src: "public/images/gallery/monkey.jpg",
      alt: "monkey watercolour",
    },
    {
      name: "Patterns of Nature - Monstera Leaf",
      date: "2018",
      src: "public/images/gallery/monstera-leaf.jpg",
      alt: "monstera watercolour painting",
    },
    // Single
    {
      name: "Bamboo Forest",
      date: "2019",
      src: "public/images/gallery/bamboo-forest.jpg",
      alt: "bamboo watercolor painting",
    },
  ],
});

document.getElementById("watercolourGallery").innerHTML += watercolourData;
