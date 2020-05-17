var travelGallery = document.getElementById("script-travel-gallery").innerHTML;

var template = Handlebars.compile(travelGallery);

var travelData = template({
  images: [
    // Ancient Monuments
    {
      name: "Angkor Wat",
      date: "2020",
      src: "public/images/gallery/angkor-wat-dark.jpg",
      alt: "angkor wat illustration",
    },
    {
      name: "Easter Island",
      date: "2020",
      src: "public/images/gallery/easter-island-dark.jpg",
      alt: "easter island illustration",
    },
    {
      name: "The Pyramids",
      date: "2020",
      src: "public/images/gallery/pyramids-dark.jpg",
      alt: "pyramids digital artwork",
    },

    {
      name: "The Colosseum",
      date: "2020",
      src: "public/images/gallery/colosseum-dark.jpg",
      alt: "colosseum illustration",
    },
    {
      name: "Leaning Tower",
      date: "2020",
      src: "public/images/gallery/leaning-tower-dark.jpg",
      alt: "leaing tower of pisa art",
    },
    {
      name: "Taj Mahal",
      date: "2020",
      src: "public/images/gallery/taj-mahal-dark.jpg",
      alt: "taj mahal illustration",
    },

    {
      name: "Chichen Itza",
      date: "2020",
      src: "public/images/gallery/chichen-itza-dark.jpg",
      alt: "chichen itza art",
    },
    {
      name: "Great Wall",
      date: "2020",
      src: "public/images/gallery/great-wall-dark.jpg",
      alt: "great wall painting",
    },
    {
      name: "Stonehenge",
      date: "2020",
      src: "public/images/gallery/stonehenge-dark.jpg",
      alt: "stonehenge artwork",
    },
  ],
});

document.getElementById("travelGallery").innerHTML += travelData;
