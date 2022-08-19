//  console.log("showIllustrations.js is connected")

const illustrationGallery = document.getElementById("ownIllustrationGallery");

let illustrationsArray = [];

//Create:
const drawGallery = (data) => {
  data.forEach(item => {
    let slides = document.createElement("div");
    slides.classList.add("slides");

    slides.innerHTML=`
    <div id="${item.fields.title}">
    <a href="">
    <img src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title} ${item.fields.description}">
    </a>
    </div>
    `

   illustrationGallery.appendChild(slides);
    
  })

 
  
}

async function getIllustrations() {
  try{
  let res = await fetch("../js/data/ownIllustrations.json");
  // const resOff = await fetch("https://jertfelt.github.io/js/data/categories.json");

  const data= await res.json();

  illustrationsArray = [...data.ownIllustrations];

  const title = illustrationsArray.map(item => {
    return item;
  })
 
  drawGallery(title);
}
catch(error){console.log("Fetch fungerar ej, se över getIllustrations")
console.log(error)}
}

getIllustrations();


const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;
const slideWidth = 540;

const highlightThumbnail = () => {
  thumbnailContainer
    .querySelectorAll('div.highlighted')
    .forEach(el => el.classList.remove('highlighted'));
  const index = Math.floor(slideGallery.scrollLeft / slideWidth);
  thumbnailContainer
    .querySelector(`div[data-id="${index}"]`)
    .classList.add('highlighted');
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(index * slideWidth, 0);
};

thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join('');

thumbnailContainer.querySelectorAll('div').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => highlightThumbnail());

highlightThumbnail();