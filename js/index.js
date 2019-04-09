/**
 * Locals
 */

let links = document.querySelectorAll('.nav-link')
links = Array.from(links)


/**
 * Change "About us" link to blue.
 *
 * Q: Why is it delayed?
 * Q: Why did this fire when using tab to focus?
 */

let nav_about_us = document.querySelector("header.main-navigation nav a:nth-child(2)")

nav_about_us.addEventListener("keydown", (event) => {
  event.target.style.color = "blue"
})

/**
 * Add drag/drop handler.
 */

let nav_contact = document.querySelector("header.main-navigation nav a:last-child")

nav_contact.addEventListener("drag", (event) => {
  if (event.screenX < 500) {
    links.forEach(link => link.style.color = 'orange')
  } else {
    links.forEach(link => link.style.color = 'blue')
  }
})

/**
 * Add focus handler.
 */

links.forEach(link => {
  link.addEventListener("focusin", (event) => {
    link.style.border = "2px solid blue"
    link.style.outline = "none"
  })

  link.addEventListener("focusout", (event) => {
    link.style.border = "none"
  })
})
