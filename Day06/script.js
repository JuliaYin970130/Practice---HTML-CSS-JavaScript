const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box =>{
        // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
        // 是DOM元素到浏览器可视范围的距离（不包含页面看不见的部分）。
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else[
            box.classList.remove('show')
        ]
    })
}