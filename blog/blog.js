
const client = contentful.createClient({
  space: 'mu0ve1mpza7k',
  accessToken: 'b8a9ca89aecb31ec139288d02875fc7e4342cb4f05cc3a0f2ec40e66b81db21d'
})

client.getEntries({
  'content_type': 'blog'
})
.then(function (entries) {
    blogs  = entries.items
    
    
    
     blogs.map(blog =>{
         console.log(blog)
        let i= 1;
         let x = blog.fields
         let target = document.querySelector('.blog')
        let hhtml = `
       
                        <div class= 'blogpost ${x.slug}' >
                          
                            
                            <div class="projectInfo">
                              <img src=${x.img[1].fields.file.url} alt="">
                                <h2> ${x.title}</h2>
                                <p>${x.extract}</p>
                               <a href= '/posts#${x.slug}'> <button >Read</button></a>
                            </div>
                            
                            <p class="tags">${x.category}</p>

                        </div>
                 
        `
        let child = document.createElement('div')
        child.setAttribute('class', 'rowLight ')
        child.innerHTML = hhtml
        target.appendChild(child)
     })
      
})

/*
const modal=  document.getElementById('overlay')
const overLayContent = document.getElementById('overLayContent')
let cfc = {}

let indexSelected = 0

window.onload = function(){
document.getElementById('personalProjects').addEventListener('click', function(e){
   
   
    let x = e.path[1].classList
    let xx = e.path[2].classList
 
   if( x[0] == 'tagg' || xx[0] == 'tagg' ){
      let targetClass =  x[0] == 'tagg'?x[1]: xx[1]
    
  let ccfc=    blogs.filter(blog =>{
     let x = blog.fields
        return (x.slug == targetClass)
      })
   
  modal.classList.remove('modal')
   cfc = ccfc[0].fields

    const hhtml= ` <div class="read ${cfc.slug}">
                <div class="imag">
                <img src='${cfc.featuredImg.fields.file.url}' alt='${cfc.name}'>
                </div>
                <h3>${cfc.name}</h3>
                <p>${cfc.description}</p>

            </div>` 
            
          overLayContent.innerHTML = hhtml
        indexSelected  =        blogs.findIndex(function(x){
return( x.fields.slug == targetClass )

})


            
           
            
   }
})

document.querySelector('.next').addEventListener('click', function(){

    if(indexSelected >= blogs.length-1){
indexSelected = 0
}else{
indexSelected += 1
}
    

let dx =  blogs[indexSelected]
    cfc = dx.fields
  
     const hhtml= ` <div class="read ${cfc.slug}">
                <div class="imag">
                <img src='${cfc.featuredImg.fields.file.url}' alt='${cfc.name}'>
                </div>
                <h3>${cfc.name}</h3>
                <p>${cfc.description}</p>

            </div>` 
            
            overLayContent.innerHTML = hhtml
})

document.querySelector('.prev').addEventListener('click', function(){

    if(indexSelected == 0){
indexSelected = blogs.length-1
}else{
indexSelected -= 1
}
    

let dx =  blogs[indexSelected]
    cfc = dx.fields
  
     const hhtml= ` <div class="read ${cfc.slug}">
                <div class="imag">
                <img src='${cfc.featuredImg.fields.file.url}' alt='${cfc.name}'>
                </div>
                <h3>${cfc.name}</h3>
                <p>${cfc.description}</p>

            </div>` 
            
            overLayContent.innerHTML = hhtml
})

document.querySelector('.close').addEventListener('click', function(){
     modal.classList.add('modal')
})
}
*/