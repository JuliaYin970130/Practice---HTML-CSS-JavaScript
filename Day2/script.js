const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive =1;

next.addEventListener('click',()=>{
    currentActive ++;

    if(currentActive>circles.length){
        // 设定成最大值，这样到头了就不会变了
        currentActive = circles.length;
    }
    // update to dom
    update();
})

prev.addEventListener('click',()=>{
    currentActive --;

    if(currentActive<1){
        // 设定成最小值
        currentActive = 1;
    }
    update();
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    // 实现中间线的显示
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + "%";

    if(currentActive===1) {
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false
        next.disabled = false
    }

}