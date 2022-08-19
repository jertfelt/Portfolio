const changeActivePage = (sectionName, categoryName, ) => {

  const newUrl = createURL(sectionName, categoryName, )
  location.href = newUrl;
}

const createURL = ( sectionName,categoryName, ) => {
  const url = new URL(window.location.href);
  const searchParam = url.searchParams;

  searchParam.delete("id");
  searchParam.delete("category");

  searchParam.set("section", sectionName)
  
if (categoryName) {  
  searchParam.set("category", categoryName)}



return url.toString();

}

const sections = document.querySelectorAll(".section");

const setActivePage = () => {
  let url = new URL(window.location.href);

  let searchParam = url.searchParams;
  const currentPage = searchParam.get("section");

 

  if (currentPage) {
   
    if (currentPage !== "homepageSection"){
      document.getElementById("homepageSection").classList.add("hidden");
    }
    // console.log(sections)
    sections.forEach(section => { 
      
      if(section.id === currentPage){
       section.classList.remove("hidden")
       console.log(section.classList)
      }
    })
   
  }
  
}

setActivePage();

