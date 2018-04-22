
const client = contentful.createClient({
  space: 'mu0ve1mpza7k',
  accessToken: 'b8a9ca89aecb31ec139288d02875fc7e4342cb4f05cc3a0f2ec40e66b81db21d'
})

client.getEntries({
  'content_type': 'portfolio'
})
.then(function (entries) {
    portfolios  = entries.items.filter(portfolio =>{
     let x = portfolio.fields
        return (x.studentProject)
      })
    console.log(portfolios)
    
     portfolios.map(portfolio =>{
         console.log(portfolio)
         let x = portfolio.fields
         let target = document.getElementById('personalProjects')
        let hhtml = `
       
                        <div class= 'tagg ${x.slug}' >
                            <img src=${x.featuredImg.fields.file.url} alt="">
                            
                            <div class="projectInfo">
                                <p>Client: ${x.name}</p>
                                <p>${x.webProject? 'Built With':'Design Software'}: ${x.builtWith}</p>
                            </div>
                            
                            <p class="tags">${x.category}</p>

                        </div>
                 
        `
        let child = document.createElement('div')
        child.setAttribute('class', 'projectItem ')
        child.innerHTML = hhtml
        target.appendChild(child)
     })
          
})


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
    
  let ccfc=    portfolios.filter(portfolio =>{
     let x = portfolio.fields
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
        indexSelected  =        portfolios.findIndex(function(x){
return( x.fields.slug == targetClass )

})


            
           
            
   }
})

document.querySelector('.next').addEventListener('click', function(){

    if(indexSelected >= portfolios.length-1){
indexSelected = 0
}else{
indexSelected += 1
}
    

let dx =  portfolios[indexSelected]
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
indexSelected = portfolios.length-1
}else{
indexSelected -= 1
}
    

let dx =  portfolios[indexSelected]
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
