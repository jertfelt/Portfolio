
const formGallery = document.getElementById("formGallery");
const singleImg = document.getElementById("singleFormGallery");

let formArr = [];
let singleimgArr = [];

//singles

const drawFormgivningSingle = (data) => {
  data.forEach(item => {
    let article = document.createElement("article");
    article.classList.add("formgivning__grid--item")
    
    article.innerHTML = `
    <span>
      <h2 class="text--m headerfont">${item.fields.title}</h2>
      <p class="text--s">${item.fields.description}</p>
      <p class="text--s">${item.fields.indepth}</p>
    </span>
    <div class="gallery__simple">
    <img src="${item.fields.image.fields.file01.url}"
    id="${item.fields.title} ${item.fields.image.fields.file01.id}"
    alt="${item.fields.title}">
    </div>
    `
    formGallery.appendChild(article)
  })
}


//Create:
const drawFormgivning = (data) => {

  data.forEach(item => {
    let article = document.createElement("article");
    article.classList.add("formgivning__grid--item")

    article.innerHTML = `
    <span>
      <h2 class="text--m headerfont">${item.fields.title}</h2>
      <p class="text--s">${item.fields.description}</p>
      <p class="text--s">${item.fields.indepth}</p>
    </span>
    <img class="formgivning__grid--abovegallery"
    src="./styles/img/icons/round-arrow-right-icon.svg">
    <div class="gallery__scroll--right">
    <img src="${item.fields.image.fields.file01.url}"
    id="${item.fields.title} ${item.fields.image.fields.file01.id}"
    alt="${item.fields.title}">
    <img src="${item.fields.image.fields.file02.url}"
    id="${item.fields.title} ${item.fields.image.fields.file02.id}"
    alt="${item.fields.title}">
    <img src="${item.fields.image.fields.file03.url}"
    id="${item.fields.title} ${item.fields.image.fields.file03.id}"
    alt="${item.fields.title}">
    <img src="${item.fields.image.fields.file04.url}"
    id="${item.fields.title} ${item.fields.image.fields.file04.id}"
    alt="${item.fields.title}">
    </div>`

    formGallery.appendChild(article)
  })

}

async function getFormgivning() {
  try{
  let res = await fetch("../js/data/formgivning.json");
  const data= await res.json();

  formArr = [...data.formgivning];

  const title = formArr.map(item => {
    return item;
  })
  drawFormgivning(title);
}
catch(error){console.log("Fetch fungerar ej, se över getFormgivning")
console.log(error)}
}
getFormgivning();




async function getSingleForm() {
  try{
  let res = await fetch("../js/data/formgivningSingles.json");
  const data= await res.json();

  singleimgArr = [...data.formgivningSingles];

  const title = singleimgArr.map(item => {
    return item;
  })
  drawFormgivningSingle(title);
}
catch(error){console.log("Fetch fungerar ej, se över getFormgivning")
console.log(error)}
}
getSingleForm();


