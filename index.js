//By Built In Function
// let h1=document.querySelector('.heading')
// let bodycolor=document.body
// window.addEventListener(('mousemove'),()=>
// {
//     const randomnumer=Math.floor(Math.random()*16777215).toString(16)
//     bodycolor.style.backgroundColor="#" + randomnumer
//     console.log(randomnumer)
// })
//By Using Functions and Loops

let colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let colorsName = document.querySelector('.cName')
let Colorbutton=document.querySelector('#colorbtn')
//Generatingng Random number
const randnumgen = () => {
    let randnum = Math.random() * colors.length
    let floor = Math.floor(randnum)
    return floor

}
//Generating hexValue 
const colorsgen = () => {
    let hexvalue = '#'
    for (let i = 0; i < 6; i++) {
        hexvalue = hexvalue + colors[randnumgen()]
    }
    // console.log(hexvalue)// for checking its Working or Not
    return hexvalue
}

//Main
Colorbutton.addEventListener('click', () => {
    // randnumgen()
    document.body.style.background = colorsgen()
    colorsName.innerHTML = colorsgen() //For Displaying on Screen
    


})