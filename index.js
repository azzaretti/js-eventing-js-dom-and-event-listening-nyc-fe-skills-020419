// We want to react to clicks on the main tag
// let main = document.getElementById('main')


// function onClick(event) {
//   console.log(event)
// }

function onKeyDown(){
  console.log(event.which)
}

// //event listener needs two inputs 1st, action 2nd function to perform
// // // main.addEventListener('click', onClick)
document.addEventListener('keydown', onKeyDown)


// // let inputBox = document.getElementById('inputBox')



// // function onInputKeyDown(event) {
// //   if (event.which === 71) {
// //   event.preventDefault()
// // } else {
// //   console.log(event.which)
// // }
// // }

// // inputBox.addEventListener('keydown', onInputKeyDown)

// const p = document.getElementById('yellow')
// const b = document.getElementById('blue')
// const r = document.getElementById('red')
// const o = document.getElementById('orange')
// const g = document.getElementById('green')
// const pink = document.getElementById('pink')
// // function onYellowClick(event, )

// p.addEventListener('click', () => { 
//   p.style.backgroundColor = 'yellow'
//   b.style.backgroundColor = 'blue'
//   o.style.backgroundColor = 'orange'
//   g.style.backgroundColor = 'green'
//   r.style.backgroundColor = 'red'
//   pink.style.backgroundColor = 'pink'
// })

// p.addEventListener('dblclick', () => {
//   p.style.backgroundColor = 'white'
//   b.style.backgroundColor = 'white'
//   o.style.backgroundColor = 'white'
//   g.style.backgroundColor = 'white'
//   r.style.backgroundColor = 'white'
//   pink.style.backgroundColor = 'white'
// })

// let button = document.getElementById('plus')

// // button.addEventListener('click', () => {
// //   const newP = document.createElement('p')
// //   newP.innerHTML = 'Congratulations! You did it!'
// //   document.body.appendChild(newP)
// // })

// const divs = document.querySelectorAll('div')

// for(let div of divs) {
//   div.addEventListener('click', (event) => {
//     div.style.backgroundColor = "blue"
//     event.stopPropagation()
//   })
// }

