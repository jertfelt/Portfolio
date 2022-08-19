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

  const homepageSect = document.getElementById("homepageSection")

  if (currentPage) {
   console.log(currentPage)
    sections.forEach(section => { 
      console.log(section.id)
      
      if (section.id === currentPage){
        if (section.id !== "homepageSection"){
       
        }
        section.classList.remove("hidden");
      }
  
    })}
  
}

setActivePage();

