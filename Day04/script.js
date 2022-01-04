const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click',()=>{
    // 参数为要在元素中移除的类名，并返回 false。
    // 如果该类名不存在则会在元素中添加类名，并返回 true。
    search.classList.toggle('active')
    input.focus()

})