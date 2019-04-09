/**
 * Locals
 */

let links = document.querySelectorAll('.nav-link')
links = Array.from(links)

/**
 * Add mouseover handler
 */

const img_fun_bus = document.getElementById("img-fun-bus");

img_fun_bus.addEventListener("mouseover", event => {
  event.target.style.opacity = "0.8"
  setTimeout(() => { event.target.style.opacity = "1" }, 300);
})

/**
 * Change "About us" link to blue.
 *
 * Q: Why is it delayed?
 * Q: Why did this fire when using tab to focus?
 */

let nav_about_us = document.querySelector("header.main-navigation nav a:nth-child(2)")

nav_about_us.addEventListener("keydown", event => {
  event.target.style.color = "blue"
})

/**
 * Add wheel handler
 */

let nav_blog = document.querySelector("header.main-navigation nav a:nth-child(3)")

nav_blog.addEventListener("wheel", event => {
  if (event.pageY > 340) {
    event.currentTarget.style.background = "red"
  } else {
    event.currentTarget.style.background = ""
  }
})

/**
 * Add drag/drop handler.
 */

let nav_contact = document.querySelector("header.main-navigation nav a:last-child")

nav_contact.addEventListener("drag", event => {
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
  link.addEventListener("focusin", event => {
    link.style.border = "2px solid blue"
    link.style.outline = "none"
  })

  link.addEventListener("focusout", event => {
    link.style.border = "none"
  })
})

/**
 * Q: Why doesnt resize fire for textarea?
 */

/**
 * Add scroll handler
 */

let do_this_once = false
window.addEventListener('scroll', event => {
  if (do_this_once === false && event.timeStamp >= 5000) {
    alert("Can you give us money?")
    do_this_once = true
  }
})

// This works too:
// let textarea = document.getElementById('story')
// textarea.addEventListener('scroll', event => {
//   console.log(event)
// })

/**
 * Add dblclick handler
 */

let logo_heading = document.querySelector('h1')

logo_heading.addEventListener("dblclick", event => {
  let original_text = logo_heading.textContent
  logo_heading.textContent = "Surprise!"

  setTimeout(() => {
    logo_heading.textContent = original_text
  }, 3000)
})

/**
 * Nest two similar events
 */

const img_fun = document.getElementById('img-fun')
const section_fun = document.getElementById('section-fun')

img_fun.addEventListener('mouseover', event => {
  event.stopPropagation()
  console.log(`Image: ${event}`)
  alert("Image fun!")
})
section_fun.addEventListener('mouseover', event => {
  console.log(`Section: ${event}`)
  alert("Section fun!")
})
