const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button =>{
    button.addEventListener('click',function (e){
        // 是点击时候的坐标
        const x = e.clientX
        const y = e.clientY
        // console.log(x,y)

        // 这个是button自己的位置
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // console.log(buttonTop,buttonLeft)
        // console.log(e.target)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // 加入点击时需要的圆圈特效
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside +'px'
        circle.style.left = xInside +'px'

        this.appendChild(circle)

        // 确保一段时间后可以把circle从dom里删除，避免占用位置
        setTimeout(()=>circle.remove(),500)
    })
})