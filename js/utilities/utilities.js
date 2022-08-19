//buttons navigation

const navHomeButtons = document.querySelectorAll(".homebutt")

navHomeButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "/"
    console.log("going back to start")
  });
})

document.getElementById("aboutMe").onclick=()=>{
  changeActivePage("aboutmeSection", "Om mig")
  document.getElementById("homepageSection").classList.add("hidden");
}

document.getElementById("illustrationJob").onclick=()=>{
  changeActivePage("uppdragillustrationerSection", "Illustrationsuppdrag")
  document.getElementById("illustrationSection").classList.add("hidden");
}

document.getElementById("illustrationOwnWork").onclick=()=>{
  changeActivePage("egnaillustrationerSection", "Fristående illustrationer")
  document.getElementById("illustrationSection").classList.add("hidden");
}

const contactButtons = document.querySelectorAll(".button--contact");

contactButtons.forEach(button => {
button.addEventListener("click", () => {
  document.getElementById("homepageSection").classList.add("hidden");
  changeActivePage("contactSection", "Kontakta mig")
  
})
})
