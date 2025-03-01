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

const arr1 = [
        {
        img: "./images/Screenshot_20250223-200049.jpg",
        p: "$100",
        title: "hello world",
        id: "phone1"
        },
        {
            img: "./images/Screenshot_20250223-200049.jpg",
            p: "$100",
            title: "hello world",
            id: "phone2"
            },{
                img: "./images/Screenshot_20250223-200049.jpg",
                p: "$100",
                title: "hello world",
                id: "phone3"
                },
    ]

arr1.forEach((value)=>{
    const div = document.createElement('div')
    div.className = "shelf"
    const div2 = document.createElement('div')
    div2.className = "img"
    const img = document.createElement('img')
    img.src = value.img
    div2.appendChild(img)
    const div3 = document.createElement('div')
    div3.className = "price-con"
    const div4 = document.createElement('div')
    div4.className = "price"
    const h2 = document.createElement('h2')
    h2.innerHTML = value.title
    const p = document.createElement('p')
    p.innerHTML = value.p
    const btn = document.createElement('button')
    btn.innerHTML = "Order now"
    btn.id = value.id
    div4.appendChild(h2)
    div4.appendChild(p)
    div4.appendChild(btn)
    div3.appendChild(div4)
    div.appendChild(div2)
    div.appendChild(div3)
 document.querySelector('.shelf-con-1').appendChild(div)
})



const btn = document.querySelectorAll('button')

btn.forEach(value=>{
    value.addEventListener('click', (e)=>{
       const item = arr1.filter(v => v.id === e.target.id)
       console.log(item);
       
    })
})

