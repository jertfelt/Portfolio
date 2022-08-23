const exhibitionDiv = document.getElementById("exhibitions");

let exArr = [];

const drawExhibitions = (data) => {
  data.forEach(item => {
    let paragraph = document.createElement("article");

    paragraph.classList.add("aboutme__exhibitions--exhibits");
    paragraph.innerHTML = `
    <span class="aboutme__exhibitions--column">
    <p class="text--s headerfont" id="${item.fields.title}">${item.fields.title}</p>
    <p>${item.fields.date}</p>
    <p>${item.fields.description}</p>
    
    </span>
    `
    exhibitionDiv.appendChild(paragraph);

  })
}


async function getExhibits() {
  try{
  let res = await fetch("../js/data/exhibitions.json");


  const data = await res.json();

  exArr = [...data.exhibitions];

  const exhibitionstitle = exArr.map(item => {
    return item;
  })
 
  drawExhibitions(exhibitionstitle);
}
catch(error){console.log("Fetch fungerar ej, se över getExhibits()")}
}

getExhibits();
