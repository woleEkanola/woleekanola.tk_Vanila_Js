let x = window.location.hash
const y = x.substring(1,x.length)
console.log(y)
var md = new Remarkable();
const client = contentful.createClient({
  space: 'mu0ve1mpza7k',
  accessToken: 'b8a9ca89aecb31ec139288d02875fc7e4342cb4f05cc3a0f2ec40e66b81db21d'
})

client.getEntries({
  'content_type': 'blog'
})
.then(function (entries) {
    blogs  = entries.items.filter(blog =>{
     let x = blog.fields
        return (x.slug== y)
      })
    if(blogs.length==0){
        let target = document.querySelector('.blog')
    let hhtml = `
    <img src='../img/404.jpg' alt="" width= '300px'>
    `
    let child = document.createElement('div')
        child.setAttribute('class', 'blogPost ')
        child.innerHTML = hhtml
        target.appendChild(child)
    }
   
     blogs.map(blog =>{
         
       
         let x = blog.fields
         let target = document.querySelector('.blog')
        let hhtml = `
       
                        <div class= 'blogpost ${x.slug}' >
                          
                            
                            <div class="projectInfo">
                              <img src=${x.img[1].fields.file.url} alt="">
                                <h2> ${x.title}</h2>
                                ${md.render(x.content)}
                              
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