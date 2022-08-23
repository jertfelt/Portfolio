//  console.log("showIllustrations.js is connected")

const illustrationGallery = document.getElementById("galleryOwnIllustration");
const slideDivIllustrationGallery = document.getElementById("slidesIllustrationsOwn")

let firstColumn = document.getElementById("slidesFirstCol");
let scndColumn = document.getElementById("slides2ndCol");

let illustrationsArray = [];

//Create:
const drawGallery = (data) => {
  // console.log(data);
  let even = data.filter(function(element, index, array) {
    return (index %2 ===0)
  })
  let odd = data.filter(function(element, index, array) {
    return (index %2 !==0)
  })


  
  even.forEach(item => {
    let slidesDiv = document.createElement("div");
  
   
    slidesDiv.innerHTML=`
    <div class="pointer"
    id="${item.fields.title}">
    <a href="">
    <img src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title} ${item.fields.description}">
    <span class="gallery__description">
    <h3 class="text--m headerfont">${item.fields.title}</h3>
    <h4 class="text--s">${item.fields.description}</h4>
    </span>
    </a>
    </div>
    `
    scndColumn.appendChild(slidesDiv);
  })

  odd.forEach(item => {
    let slidesDiv = document.createElement("div");
   
    slidesDiv.innerHTML=`
    <div class="pointer"
    id="${item.fields.title}">
    <a href="">
    <img src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title} ${item.fields.description}">
    <span class="gallery__description">
    <h3 class="text--m headerfont">${item.fields.title}</h3>
    <h4 class="text--s">${item.fields.description}</h4>
    </span>
    </a>
    </div>
    `
    firstColumn.appendChild(slidesDiv);
  })
 
  
}



async function getIllustrations() {
  try{
  let res = await fetch("../js/data/ownIllustrations.json");
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






const jobillustrationGallery = document.getElementById("galleryJobIllustration");
const slideDivjobIllustrationGallery = document.getElementById("slidesIllustrations")

let firstCol = document.getElementById("firstCol");

let secondCol = document.getElementById("2ndCol");

let jobillustrationsArray = [];

//Create:
const drawJobIllustrationGallery = (data) => {
  // console.log(data);
  let even = data.filter(function(element, index, array) {
    return (index %2 ===0)
  })
  let odd = data.filter(function(element, index, array) {
    return (index %2 !==0)
  })

  even.forEach(item => {
    let content = document.createElement("div");
    content.innerHTML=`
    <div class="pointer"
    id="${item.fields.title}">
    <a href="${item.fields.link}">
    <img src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title} ${item.fields.description}">
    <span class="gallery__description">
    <h3 class="text--m headerfont">${item.fields.title}</h3>
    <h4 class="text--s">${item.fields.description}</h4>
    </span>
    </a>
    </div>
    `
    secondCol.appendChild(content);
  })

  odd.forEach(item => {
    let content = document.createElement("div");
    content.innerHTML=`
    <div class="pointer"
    id="${item.fields.title}">
    <a href="${item.fields.link}">
    <img src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title} ${item.fields.description}">
    <span class="gallery__description">
    <h3 class="text--m headerfont">${item.fields.title}</h3>
    <h4 class="text--s">${item.fields.description}</h4>
    </span>
    </a>
    </div>
    `
    firstCol.appendChild(content);
  })

 
  
}



async function getJobIllustrations() {
  try{
  let res = await fetch("../js/data/uppdragIllustrations.json");

  const data= await res.json();

  jobillustrationsArray = [...data.uppdragIllustrations];

  const title =  jobillustrationsArray.map(item => {
    return item;
  })
 
  drawJobIllustrationGallery(title);
}
catch(error){console.log("Fetch fungerar ej, se över getJobIllustrations")
console.log(error)}
}

getJobIllustrations();

