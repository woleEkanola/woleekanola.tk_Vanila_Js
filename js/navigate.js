const about = document.getElementById('about')
const home =    document.getElementById('home')
const portfolio =    document.getElementById('portfolio')
const training =    document.getElementById('training')
const contact =    document.getElementById('contact')
const blog =    document.getElementById('blog')


home.addEventListener('click', function(){
    window.scrollTo(0, 0)
   
})

about.addEventListener('click', function(){
    window.scrollTo(0, 600)
   
})


var scrollFunc = function(){
let y = window.scrollY
if(y< 500){
 home.setAttribute('class', 'active')
 about.setAttribute('class', '')
 portfolio.setAttribute('class', '')
 training.setAttribute('class', '')
 contact.setAttribute('class', '')
 blog.setAttribute('class', '')
}else{
     home.setAttribute('class', '')
 about.setAttribute('class', 'active')
 portfolio.setAttribute('class', '')
 training.setAttribute('class', '')
 contact.setAttribute('class', '')
 blog.setAttribute('class', '')
}
}

document.addEventListener('scroll', scrollFunc)