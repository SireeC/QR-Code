let dom = document.getElementsByTagName('main')[0]
let img = document.getElementsByTagName('img')[0]
let inp = document.getElementsByTagName('input')[0]
let btn = document.getElementsByTagName('button')[0]


img.style.display = 'none'

btn.addEventListener('click',()=>{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`
        img.style.display = 'block'
        
    }
)