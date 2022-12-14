

const categoriesHomePage = document.getElementById("allContentHomepage");

const queryParams = new URLSearchParams(location.search);

let categoriesArr = [];

//Create:
const drawHomePage = (data) => {
  data.forEach(item => {
    let article = document.createElement("article");

    article.innerHTML=`
    <article id="${item.fields.title}"
    class="grid__category ">

    <div class="pointer">
    <img
    class="grid__img under"
    src="${item.fields.image.fields.file.url}"
    alt="${item.fields.title}"
    >
    <span class="grid__category--txt above grid__category--txtabove skewedbg--black">
    <h3 
    class="text--m headerfont text--lightblue skewedbg--reverse">
    ${item.fields.title}</h3>
    <h4 class="text--bold text--white  skewedbg--reverse">${item.fields.description}</h4>
    </span>

    </div>
    <img src="${item.fields.image.fields.file.url}"
    class="grid__category--img"
    alt="${item.fields.title}
    </img>
    </article>`

    categoriesHomePage.appendChild(article);
    
  })

  


  document.getElementById("Illustration").onclick=()=>{
    changeActivePage(`illustrationSection`, "Illustration");
  }
  
  document.getElementById("Konst").onclick=()=>{
    changeActivePage("konstSection", "Konst")
  }
  
  document.getElementById("Formgivning").onclick=()=>{
    changeActivePage("formgivningSection", "Formgivning")
  }

  document.getElementById("Frontend").onclick=()=>{
    window.location.href = "http://www.tovajertfelt.se";
  }


  
}

async function getCategories() {
  try{
  let res = await fetch("../js/data/categories.json");


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

