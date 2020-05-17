console.log("Welcome to my art page :)");

var sideprojectsGallery = document.getElementById("script-sideprojects-gallery")
  .innerHTML;

var template = Handlebars.compile(sideprojectsGallery);

var sideprojectsData = template({
  images: [
    // Space Adventures
    {
      name: "Space Travel",
      date: "2020",
      src: "public/images/gallery/rocket-1.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Explore Outer Space",
      date: "2020",
      src: "public/images/gallery/rocket-2.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Comet Adventure",
      date: "2020",
      src: "public/images/gallery/comet.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Otter Space",
      date: "2020",
      src: "public/images/gallery/otterspace.jpg",
      alt: "flat graphic design space",
    },

    // Fun Stuff
    {
      name: "Gubble Gubble",
      date: "2019",
      src: "public/images/gallery/gubble-gubble.jpg",
      alt: "Gubble Gubble Asterix und Obelix in Amerika",
    },
    {
      name: "Pumpkin Pandas",
      date: "2019",
      src: "public/images/gallery/pumpkin-pandas.jpg",
      alt: "cute pumkins and pandas halloween art",
    },
    {
      name: "Chubby Unicorn",
      date: "2019",
      src: "public/images/gallery/chubby-unicorn.jpg",
      alt: "rainbow coloured rhinozeros",
    },
    {
      name: "Stampede",
      date: "2019",
      src: "public/images/gallery/stampede.jpg",
      alt: "rainbow coloured rhinozeros pattern",
    },
    {
      name: "Tiger",
      date: "2019",
      src: "public/images/gallery/tiger.jpg",
      alt: "tiger vector art",
    },
    {
      name: "Whale",
      date: "2019",
      src: "public/images/gallery/whale.jpg",
      alt: "whale vector art",
    },
    {
      name: "Elephant",
      date: "2019",
      src: "public/images/gallery/elephant.jpg",
      alt: "elephant vector art",
    },
    {
      name: "Penguin Hugs",
      date: "2019",
      src: "public/images/gallery/penguin-hugs.jpg",
      alt: "hugging penguin art",
    },
    {
      name: "Pixel Penguins",
      date: "2019",
      src: "public/images/gallery/pixel-penguins.jpg",
      alt: "pixel penguins",
    },
    {
      name: "Merry Christmas",
      date: "2019",
      src: "public/images/gallery/christmascard.jpg",
      alt: "christmas card snowflake",
    },
  ],
});

document.getElementById("sideprojectsGallery").innerHTML += sideprojectsData;
