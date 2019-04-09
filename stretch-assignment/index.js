'use strict'

/**
 * Locals
 */

let boxes_container = document.querySelector(".blocks")
let boxes = document.querySelectorAll(".block")
let box_red = document.querySelector(".block--red")
let box_blue = document.querySelector(".block--blue")
let box_green = document.querySelector(".block--green")
let box_pink = document.querySelector(".block--pink")
let box_gray = document.querySelector(".block--gray")

/**
 * Blocks to top of container on click.
 */

boxes.forEach(box => {
  box.addEventListener('click', event => {
    boxes_container.prepend(event.currentTarget)
  })
})
