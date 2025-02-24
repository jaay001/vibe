const dropcon = document.querySelector('.dropdown-con')






dropcon.addEventListener('click', (e)=>{
    if(dropcon.style.height < '100px'){
        dropcon.style.height = '200px'
    } else {
        dropcon.style.height = '0px'
    }
    if(im.src="./im/up.png"){
        im.src="./im/up.png".value = im.src="./im/down.png" 
    }else {
        im.src="./im/down.png".value = im.src="./im/up.png"
    }
})