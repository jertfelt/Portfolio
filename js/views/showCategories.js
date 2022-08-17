// console.log("showCategories.js is connected")

const categoriesHomePage = document.getElementById("allContentHomepage");

const queryParams = new URLSearchParams(location.search);

console.log(queryParams);

let categoriesArr = [];

//Create:
const drawHomePage = (data) => {
  data.forEach(item => {
    let article = document.createElement("article");

    article.innerHTML=`
    <article id="${item.fields.title}"
    class="grid__category">

    <div class="pointer grid__category--container">
    <span class="grid__category--txt">
    <h3 class="text--m headerfont text--blue">${item.fields.title}</h3>
    <h4>${item.fields.description}</h4>
    </span>

    <img src="${item.fields.image.fields.file.url}"
    class="grid__category--img"
    alt="${item.fields.title}
    </img>
    
    </div>
    <img src="${item.fields.image.fields.file.url}"
    class="grid__category--img"
    alt="${item.fields.title}
    </img>
    </article>`

    categoriesHomePage.appendChild(article);
    
  })


  document.getElementById("Illustration").onclick=()=>{
    changeActivePage("categorySection", "Illustration");
  }
  
  document.getElementById("Konst").onclick=()=>{
    changeActivePage("categorySection", "Konst")
  }
  
  document.getElementById("Formgivning").onclick=()=>{
    changeActivePage("categorySection", "Formgivning")
  }
  
}

async function getCategories() {
  try{
  let res = await fetch("../js/data/categories.json");
  // const resOff = await fetch("https://jertfelt.github.io/js/data/categories.json");

  const data= await res.json();

  categoriesArr = [...data.categories];

  const titleCategory = categoriesArr.map(item => {
    return item;
  })
 
  drawHomePage(titleCategory);
}
catch(error){console.log("Fetch fungerar ej, se över getCategories()")}
}

getCategories();


//  //*---event listeners on buttons
