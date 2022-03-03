const counters = document.querySelectorAll('.counter')

counters.forEach(counter =>{
    counter.innerHTML = '0'

    const updateCounter = ()=>{
        // 这个+可以把string强转换成数字
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)
        //  string 12000 需要强转换 
        const c = +counter.innerText

        // 想要涨幅慢一点的话，可以把200降低
        const increment = target/200

        if(c < target){
            counter.innerText = `${Math.ceil(c+increment)}`
            // 一直重复计算
            // 1毫秒算一次
            setTimeout(updateCounter,1)
        } else{
            counter.innerText = target
        }

    }

    updateCounter()
})