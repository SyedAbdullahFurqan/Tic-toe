let s= "12352"
let d =Array.from(s)


/*     let boxtest=element.querySelector('.box-text')
    element.addEventListener("click",()=>{
if(boxtest.innertext === ""){
boxtest.innertext="turn"
turn= change()
document.getElementsByClassName("info")[0].innertext = turn

}


  */ 
let turn = "X";

let gameover=false;

let fd=()=>{
  return turn === "X"? "0": "X"
}


let checkwin = ()=>{

let boxtxtts=document.getElementsByClassName("box-text ")
  console.log(boxtxtts)
  let arr=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
 /* cross / */

arr.forEach(c => {
  console.log(c)
 if((boxtxtts[c[0]].innerText===boxtxtts[c[1]].innerText) && 
 (boxtxtts[c[2]].innerText=== boxtxtts[c[1]].innerText) &&
 (boxtxtts[c[0]].innerText!== "")){
 
gameover=true
document.querySelector(".turn").innerText=boxtxtts[c[0]].innerText + " won"
 


}

} )

 }

let boxs=document.getElementsByClassName("box")

Array.from(boxs).forEach(e =>{
  
  let boxtxt=  e.querySelector(".box-text ")
console.log(boxtxt)
 e.addEventListener("click", ()=>{
  if (boxtxt.innerText === '' && !gameover) {
boxtxt.innerText= turn;
turn=fd()


if(!gameover){
  
 
  document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;

  checkwin()
  
}

}


  
 
})
})
let reset=document.getElementById("reset")
reset.addEventListener("click",()=>{

Array.from(boxs).forEach(d =>{
  d.querySelector(".box-text ").innerText=""

})
d.innerText=turn

gameover=false
 document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;

});


let time= document.querySelector(".H-TIME")
let formati=document.querySelector(".format")

setInterval(()=>{
  let date=new Date()
  
  let h= date.getHours()
  let m= date.getMinutes()
  let s= date.getSeconds()
 
  time.innerHTML= ` ${h} :${ m }: ${s}`
    
},1000)





class gm{ 
 eat() {
  console.log("log in "  )
  
}
constructor(name){
this.a=name
this.food="biryani"
}
}
class game extends gm{
sla(){
  console.log("600px")

}
}
let f= new gm("rdd")
let sa=new game("ss")

sa




