var modalViews = document.getElementById("script-modal-views").innerHTML;

var template = Handlebars.compile(modalViews);

var modalData = template({
  images: [
    // Spirit Animals
    {
      name: "Manta Scout",
      date: "2020",
      src: "public/images/gallery/manta-scout.jpg",
      alt: "zentangle manta ray digital illustration by Seraphine Arts",
      id: "mantaScout",
    },
    {
      name: "Turtle Sage",
      date: "2020",
      src: "public/images/gallery/turtle-sage.jpg",
      alt: "zentangle turtle digital illustration by Seraphine Arts",
      id: "turtleSage",
    },
    {
      name: "Elephant Warrior",
      date: "2020",
      src: "public/images/gallery/elephant-warrior.jpg",
      alt: "mandala elephant digital illustration by Seraphine Arts",
      id: "elephantWarrior",
    },
    {
      name: "Shaman Wolf",
      date: "2020",
      src: "public/images/gallery/shaman-wolf.jpg",
      alt: "wolf spirit artwork",
      id: "shamanWolf",
    },
    // New Year
    {
      name: "Chinese Mouse",
      date: "2020",
      src: "public/images/gallery/chinese-mouse.jpg",
      alt: "chinese zodiac rat art",
      id: "chineseMouse",
    },
    // Animal Alliterations
    {
      name: "Flaming Fox",
      date: "2019",
      src: "public/images/gallery/flaming-fox.jpg",
      alt: "fox illustration by Seraphine Arts",
      id: "flamingFox",
    },
    {
      name: "Boho Bear",
      date: "2019",
      src: "public/images/gallery/boho-bear.jpg",
      alt: "bear art",
      id: "bohoBear",
    },
    {
      name: "Jungle Jaguar",
      date: "2019",
      src: "public/images/gallery/jungle-jaguar.jpg",
      alt: "jungle jaguar illustration",
      id: "jungleJaguar",
    },
    // Zodiac Animals
    {
      name: "Guru Goat",
      date: "2019",
      src: "public/images/gallery/guru-goat.jpg",
      alt: "goat art",
      id: "guruGoat",
    },
    {
      name: "Hero Horse",
      date: "2019",
      src: "public/images/gallery/hero-horse.jpg",
      alt: "chinese zodiac horse",
      id: "heroHorse",
    },
    // Life is Colourful
    {
      name: "Cat Love",
      date: "2019",
      src: "public/images/gallery/cat-love.jpg",
      alt: "colourful cat art",
      id: "catLove",
    },

    {
      name: "Jumping Deer",
      date: "2018",
      src: "public/images/gallery/jumping-deer.jpg",
      alt: "jumping deer illustration",
      id: "jumpingDeer",
    },
    {
      name: "Arctic Tern",
      date: "2018",
      src: "public/images/gallery/arctic-tern.jpg",
      alt: "flying bird illustration",
      id: "arcticTern",
    },
    {
      name: "Colourful Butterfly",
      date: "2018",
      src: "public/images/gallery/colourful-butterfly.jpg",
      alt: "zentangle butterfly",
      id: "colourfulButterfly",
    },
  ],
});

document.getElementById("div-modalViews").innerHTML += modalData;
