let menuButton = document.querySelector('.scrll-animation')
let menu = document.querySelector('.menuContainer')
menuButton.addEventListener('click', function(){
  menuToggle()
})
const menuToggle = function(){
 menu.classList.toggle('hide')
}


document.querySelector('.portfolio').addEventListener('click', function(){
  let x = document.querySelector('.pot')
  console.log(x)
  x.classList.toggle('hide')
})