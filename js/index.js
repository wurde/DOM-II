/**
 * Change "About us" link to blue.
 *
 * Q: Why is it delayed?
 */

let nav_about_us = document.querySelector("header.main-navigation nav a:nth-child(2)")

nav_about_us.addEventListener("keydown", (event) => {
  event.target.style.color = "blue"
})
