function clickMe() {
  let red1 = Math.floor(Math.random()* 255)
  let blue1 = Math.floor(Math.random()* 255)
  let green1 = Math.floor(Math.random()* 255)
  document.querySelector("#div1").style.backgroundColor=`rgb(${red1},${blue1},${green1})`

  let red2 = Math.floor(Math.random()* 255)
  let blue2 = Math.floor(Math.random()* 255)
  let green2 = Math.floor(Math.random()* 255)
  document.querySelector("#div2").style.backgroundColor=`rgb(${red2},${blue2},${green2})`

  let red3 = Math.floor(Math.random()* 255)
  let blue3 = Math.floor(Math.random()* 255)
  let green3 = Math.floor(Math.random()* 255)
  document.querySelector("#div3").style.backgroundColor=`rgb(${red3},${blue3},${green3})`

  let red4 = Math.floor(Math.random()* 255)
  let blue4 = Math.floor(Math.random()* 255)
  let green4 = Math.floor(Math.random()* 255)
  document.querySelector("#div4").style.backgroundColor=`rgb(${red4},${blue4},${green4})`

}

var myFunction 

function changeColor() {
  myFunction = setInterval(clickMe,1000)

}