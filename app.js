let value = document.getElementById('value')
let count = 0;
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
   btn.addEventListener('click', e => {
    const val = e.currentTarget.classList
    if(val.contains('decrease')){
        count--
    }
    else if(val.contains('increase')){
        count++
    }
    else {
        count = 0
    }
value.textContent = count
   })
    
})