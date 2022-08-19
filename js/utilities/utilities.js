//buttons navigation

const navHomeButtons = document.querySelectorAll(".homebutt")

navHomeButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "/"
    console.log("going back to start")
  });
})

document.getElementById("aboutMe").onclick=()=>{
  changeActivePage("aboutmeSection", "Om mig")}