var imageGallery = document.getElementById("script-image-gallery").innerHTML;

var template = Handlebars.compile(imageGallery);

var imageData = template({
  images: [
    // Spirit Animals
    {
      name: "Turtle Sage",
      date: "2020",
      src: "public/images/gallery/turtle-sage.png",
      alt: "zentangle turtle art",
    },
    {
      name: "Elephant Warrior",
      date: "2020",
      src: "public/images/gallery/warrior-elephant.png",
      alt: "mandala elephant illustration",
    },
    {
      name: "Shaman Wolf",
      date: "2020",
      src: "public/images/gallery/shaman-wolf.jpg",
      alt: "wolf spirit art",
    },
    // Animal Alliterations (1)
    {
      name: "Flaming Fox",
      date: "2019",
      src: "public/images/gallery/flaming-fox.jpg",
      alt: "fox illustration",
    },
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
    // Animal Alliterations (2)
    {
      name: "Boho Bear",
      date: "2019",
      src: "public/images/gallery/boho-bear.jpg",
      alt: "bear art",
    },
    {
      name: "Jungle Jaguar",
      date: "2019",
      src: "public/images/gallery/jungle-jaguar.jpg",
      alt: "jungle jaguar illustration",
    },
    // Zodiac Animals
    {
      name: "Guru Goat",
      date: "2019",
      src: "public/images/gallery/guru-goat.jpg",
      alt: "goat art",
    },
    {
      name: "Hero Horse",
      date: "2019",
      src: "public/images/gallery/zodiac-horse.jpg",
      alt: "chinese zodiac horse",
    },
    // Ancient Monuments
    {
      name: "Taj Mahal",
      date: "2019",
      src: "public/images/gallery/taj-mahal.jpg",
      alt: "aj mahal illustration",
    },
    {
      name: "Easter Island",
      date: "2019",
      src: "public/images/gallery/easter-island.jpg",
      alt: "easter island illustration",
    },
    {
      name: "The Colosseum",
      date: "2019",
      src: "public/images/gallery/colosseum.jpg",
      alt: "colosseum illustration",
    },
    {
      name: "Angkor Wat",
      date: "2019",
      src: "public/images/gallery/angkor-wat.jpg",
      alt: "angkor wat illustration",
    },
    // Life is Colourful
    {
      name: "Cat Love",
      date: "2019",
      src: "public/images/gallery/cat-illustration.jpg",
      alt: "colourful cat art",
    },
    {
      name: "Colourful Butterfly",
      date: "2018",
      src: "public/images/gallery/butterfly-illustration.jpg",
      alt: "zentangle butterfly",
    },
    {
      name: "Arctic Tern",
      date: "2018",
      src: "public/images/gallery/bird-illustration.jpg",
      alt: "flying bird illustration",
    },
    {
      name: "Jumping Deer",
      date: "2018",
      src: "public/images/gallery/deer-illustration.jpg",
      alt: "jumping deer illustration",
    },
  ],
});

document.getElementById("imageGallery").innerHTML += imageData;
