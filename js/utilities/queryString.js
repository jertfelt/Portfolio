const changeActivePage = (sectionName, categoryName, projectID) => {

  const newUrl = createURL(sectionName, categoryName, projectID)
  location.href = newUrl;
}

const createURL = (sectionName, categoryName, projectID) => {
  const url = new URL(window.location.href);
  const searchParam = url.searchParams;

  searchParam.delete("id");
  searchParam.delete("category");

  searchParam.set("section", sectionName)
  
if (categoryName) {  
  searchParam.set("category", categoryName)}

if(projectID){
  search_params.set("id", projectID)
}

return url.toString();

}

const sections = document.querySelectorAll(".section");

const setActivePage = () => {
  let url = new URL(window.location.href);
  let searchParam = url.searchParams;
  const currentPage = searchParam.get("section");
  
  if (currentPage) {
    sections.forEach(section => {
    if (sections.id === currentPage){
      if (section.id !== "homepageSection"){
        homepageSection.classList.add("hidden");
  }
  section.classList.remove("hidden");
  
  }
})}}
setActivePage();

