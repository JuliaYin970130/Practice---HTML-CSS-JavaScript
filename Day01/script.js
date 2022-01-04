// 选取所有.panel的元素 -> panels是node list
const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    // 点击的时候给反馈
    panel.addEventListener('click', ()=>{
        // 将之前的active去除
        removeActivePanel()
        // 加入active的变化
        panel.classList.add('active')
    })
})

function removeActivePanel(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}