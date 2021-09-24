const labels = document.querySelectorAll('.form-control label')

// 把每个字都拆出来，做动态
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})