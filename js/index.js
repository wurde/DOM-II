let nav_about_us = document.querySelector("header.main-navigation nav a:nth-child(2)")
console.log(nav_about_us.getAttribute("href"))
nav_about_us.addEventListener("keydown", (event) => {
  event.target.setAttribute("href", "https://google.com")
  console.log(nav_about_us.getAttribute("href"))
})
