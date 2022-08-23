
const formGallery = document.getElementById("formGallery");
const singleImg = document.getElementById("singleFormGallery");

let formArr = [];
let singleimgArr = [];

//Create:
const drawFormgivning = (data) => {

  data.forEach(item => {
    let article = document.createElement("article");
    article.classList.add("formgivning__grid--item")

    article.innerHTML = `
    <h2 class="text--m">${item.fields.title}</h2>
    <p class="text--s">${item.fields.description}</p>
    <p class="text--s">${item.fields.indepth}</p>
    <div class="scroll--right">
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




