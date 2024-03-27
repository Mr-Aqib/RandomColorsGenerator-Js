let h1=document.querySelector('.heading')
let bodycolor=document.body
window.addEventListener(('mousemove'),()=>
{
    const randomnumer=Math.floor(Math.random()*16777215).toString(16)
    bodycolor.style.backgroundColor="#" + randomnumer
    console.log(randomnumer)
})