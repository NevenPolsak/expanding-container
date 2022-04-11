function boxContainer(name){
let x 
x = document.getElementsByClassName("container")
for(let i=0;i<x.length;i++){
    x[i].style.display="none"
}
document.getElementById(name).style.display="block"
}