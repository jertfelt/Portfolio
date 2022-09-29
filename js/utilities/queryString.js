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
  console.log(url)
  let searchParam = url.searchParams;
  const currentPage = searchParam.get("section");
  console.log(currentPage)
  

  if (currentPage) {   
    if (currentPage !== "homepageSection"){
      document.getElementById("homepageSection").classList.add("hidden");
    }
    
    sections.forEach(section => { 
      if(section.id === currentPage){
       
        section.classList.remove("hidden")
      
      }
    })
  
  }

  
}

setActivePage();

