
const formGallery = document.getElementById("formGallery");

let formArr = [];
let imgArr = [];

//Create:
const drawFormgivning = (data) => {
 
  // data.forEach(item => {
  //   // let firstImg = item.fields.image.fields.file01;
  //   // let secondImg = item.fields.image.fields.file02;
  //   // let thirdImg = item.fields.image.fields.file03;
  //   // let fourthImg = item.fields.image.fields.file04;
  //   // console.log(item.fields.image.fields)
  //   imgArr.push(item.fields.image.fields)
  //   console.log(imgArr)
  // })
  data.forEach(item => {
    let article = document.createElement("article");
    console.log(item.fields.image.fields);
  
    
    
   
  
    // console.log(item.fields.image.fields.file01.url)
    article.innerHTML = `
    <img src="">`
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

