
const konstGallery = document.getElementById("konstGallery");

let konstArr = [];

const drawKonstPage = (data) => {
  
  
  //placeholder:
  let article = document.createElement("article");
  article.innerHTML= `
  <img src="./styles/img/dreams--2.gif"
  style="width:100%; margin-top:3rem;"
  alt="Gif-fil från Dreams-projektet">
  <h2 class="text--xl margintop__l">Sidan är under uppbyggnad!<h2>
  <p class="text--m">Kom tillbaks snart </p>`
  konstGallery.appendChild(article);


  // data.forEach(item => {
  //   let article = document.createElement("article");
  //   article.classList.add("konst__grid--item")
    
  //   article.innerHTML = `
  //   <span>
  //     <h2 class="text--m">${item.fields.title}</h2>
  //     <p class="text--xs">${item.fields.date}</p>
  //     <p class="text--s">${item.fields.description}</p>
  //     <p class="text--s">${item.fields.indepth}</p>
  //   </span>
  //   <img class="formgivning__grid--abovegallery"
  //   src="./styles/img/icons/round-arrow-right-icon.svg">
  //   <div class="gallery__scroll--right">
  //   <img src="${item.fields.image.fields.file01.url}"
  //   id="${item.fields.title} ${item.fields.image.fields.file01.id}"
  //   alt="${item.fields.title}">
  //   <img src="${item.fields.image.fields.file02.url}"
  //   id="${item.fields.title} ${item.fields.image.fields.file02.id}"
  //   alt="${item.fields.title}">
  //   <img src="${item.fields.image.fields.file03.url}"
  //   id="${item.fields.title} ${item.fields.image.fields.file03.id}"
  //   alt="${item.fields.title}">
  //   <img src="${item.fields.image.fields.file04.url}"
  //   id="${item.fields.title} ${item.fields.image.fields.file04.id}"
  //   alt="${item.fields.title}">
  //   </div>`

  //   konstGallery.appendChild(article);
  // }) 
 

}

  async function getKonst() {
    try{
    let res = await fetch("../js/data/konstverk.json");
  
    const data= await res.json();
   
  
    konstArr = [...data.konstverk];
  
    const title =  konstArr.map(item => {
      return item;
    })
   
    drawKonstPage(title);
  }
  catch(error){console.log("Fetch fungerar ej, se över getKonst")
  console.log(error)}
  // drawErrorPage();
  }
  
  getKonst();
  