const dropcon = document.querySelector('.dropdown-con')
const img = document.querySelector(".img")
const shelf = document.querySelector(".shelf-1")

dropcon.addEventListener('click', (e)=>{
    if(dropcon.style.height < '100px'){
        dropcon.style.height = '200px'
    } else {
        dropcon.style.height = '0px'
    }
    if(img.src="./images/up.png"){
        img.src="./images/up.png".value = img.src="./images/down.png" 
    }else {
        img.src="./images/down.png".value = img.src="./images/up.png"
    }
})

