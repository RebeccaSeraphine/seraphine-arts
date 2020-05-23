var imageGallery = document.getElementById("script-main-gallery").innerHTML;

var template = Handlebars.compile(imageGallery);

var imageData = template({
  images: [
    // Spirit Animals
    {
      name: "Manta Scout",
      date: "2020",
      src: "public/images/gallery/manta-scout.jpg",
      alt: "zentangle manta ray digital illustration by Seraphine Arts",
    },
    {
      name: "Turtle Sage",
      date: "2020",
      src: "public/images/gallery/turtle-sage.jpg",
      alt: "zentangle turtle digital illustration by Seraphine Arts",
    },
    {
      name: "Elephant Warrior",
      date: "2020",
      src: "public/images/gallery/elephant-warrior.jpg",
      alt: "mandala elephant digital illustration by Seraphine Arts",
    },
    {
      name: "Shaman Wolf",
      date: "2020",
      src: "public/images/gallery/shaman-wolf.jpg",
      alt: "wolf spirit artwork",
    },
    // New Year
    {
      name: "Chinese New Year",
      date: "2020",
      src: "public/images/gallery/chinese-mouse.jpg",
      alt: "chinese zodiac rat art",
    },
    // Animal Alliterations
    {
      name: "Flaming Fox",
      date: "2019",
      src: "public/images/gallery/flaming-fox.jpg",
      alt: "fox illustration by Seraphine Arts",
    },
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
      src: "public/images/gallery/hero-horse.jpg",
      alt: "chinese zodiac horse",
    },
    // Life is Colourful
    {
      name: "Cat Love",
      date: "2019",
      src: "public/images/gallery/cat-love.jpg",
      alt: "colourful cat art",
    },

    {
      name: "Jumping Deer",
      date: "2018",
      src: "public/images/gallery/jumping-deer.jpg",
      alt: "jumping deer illustration",
    },
    {
      name: "Arctic Tern",
      date: "2018",
      src: "public/images/gallery/arctic-tern.jpg",
      alt: "flying bird illustration",
    },
    {
      name: "Colourful Butterfly",
      date: "2018",
      src: "public/images/gallery/colourful-butterfly.jpg",
      alt: "zentangle butterfly",
    },
  ],
});

document.getElementById("imageGallery").innerHTML += imageData;
