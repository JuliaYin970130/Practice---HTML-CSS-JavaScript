const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// 打开页面的时候可以自动的把光标定向到文本框，方便打字
textarea.focus()

// keyup 按键抬起后
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(()=>{
            // 清除文本框里的内容
            e.target.value = ''

        },10)

        randomSelect()
    }
})

function createTags(input){
    // 用逗号分隔
    // trim() 方法用于删除字符串的头尾空白符,空白符包括:空格、制表符 tab、换行符等其他空白符等
    // 不能是empty string， 并且trim any white space
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML =  tag
        tagsEl.appendChild(tagEl) 
    });
    
}

function randomSelect(){
    // console.log(123)

    const times = 30
    //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    //setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)

    },100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
        
    },times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor( Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}