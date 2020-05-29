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
      src: "public/images/playground/rocket-1.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Explore Outer Space",
      date: "2020",
      src: "public/images/playground/rocket-2.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Comet Adventure",
      date: "2020",
      src: "public/images/playground/comet.jpg",
      alt: "flat graphic design space",
    },
    {
      name: "Otter Space",
      date: "2020",
      src: "public/images/playground/otterspace.jpg",
      alt: "flat graphic design space",
    },

    // Fun Stuff
    {
      name: "Gubble Gubble",
      date: "2019",
      src: "public/images/playground/gubble-gubble.jpg",
      alt: "Gubble Gubble Asterix und Obelix in Amerika",
    },
    {
      name: "Pumpkin Pandas",
      date: "2019",
      src: "public/images/playground/pumpkin-pandas.jpg",
      alt: "cute pumkins and pandas halloween art",
    },
    {
      name: "Chubby Unicorn",
      date: "2019",
      src: "public/images/playground/chubby-unicorn.jpg",
      alt: "rainbow coloured rhinozeros",
    },
    {
      name: "Stampede",
      date: "2019",
      src: "public/images/playground/stampede.jpg",
      alt: "rainbow coloured rhinozeros pattern",
    },
    {
      name: "Tiger",
      date: "2019",
      src: "public/images/playground/tiger.jpg",
      alt: "tiger vector art",
    },
    {
      name: "Whale",
      date: "2019",
      src: "public/images/playground/whale.jpg",
      alt: "whale vector art",
    },
    {
      name: "Elephant",
      date: "2019",
      src: "public/images/playground/elephant.jpg",
      alt: "elephant vector art",
    },
    {
      name: "Penguin Hugs",
      date: "2019",
      src: "public/images/playground/penguin-hugs.jpg",
      alt: "hugging penguin art",
    },
    {
      name: "Pixel Penguins",
      date: "2019",
      src: "public/images/playground/pixel-penguins.jpg",
      alt: "pixel penguins",
    },
    {
      name: "Merry Christmas",
      date: "2019",
      src: "public/images/playground/christmascard.jpg",
      alt: "christmas card snowflake",
    },
    // Ancient Monuments
    {
      name: "Angkor Wat",
      date: "2020",
      src: "public/images/playground/angkor-wat-dark.jpg",
      alt: "angkor wat illustration",
    },
    {
      name: "Easter Island",
      date: "2020",
      src: "public/images/playground/easter-island-dark.jpg",
      alt: "easter island illustration",
    },
    {
      name: "The Pyramids",
      date: "2020",
      src: "public/images/playground/pyramids-dark.jpg",
      alt: "pyramids digital artwork",
    },

    {
      name: "The Colosseum",
      date: "2020",
      src: "public/images/playground/colosseum-dark.jpg",
      alt: "colosseum illustration",
    },
    {
      name: "Leaning Tower",
      date: "2020",
      src: "public/images/playground/leaning-tower-dark.jpg",
      alt: "leaing tower of pisa art",
    },
    {
      name: "Taj Mahal",
      date: "2020",
      src: "public/images/playground/taj-mahal-dark.jpg",
      alt: "taj mahal illustration",
    },

    {
      name: "Chichen Itza",
      date: "2020",
      src: "public/images/playground/chichen-itza-dark.jpg",
      alt: "chichen itza art",
    },
    {
      name: "Great Wall",
      date: "2020",
      src: "public/images/playground/great-wall-dark.jpg",
      alt: "great wall painting",
    },
    {
      name: "Stonehenge",
      date: "2020",
      src: "public/images/playground/stonehenge-dark.jpg",
      alt: "stonehenge artwork",
    },
  ],
});

document.getElementById("sideprojectsGallery").innerHTML += sideprojectsData;
