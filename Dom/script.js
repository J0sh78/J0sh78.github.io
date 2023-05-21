/*
console.log(document)

console.log(document.getElementsByTagName("p"))

let elementosVerdes= document.getElementsByClassName("verde")
console.log(elementosVerdes[0].innerHTML)
console.log(elementosVerdes[1].innerHTML)

elementosVerdes[0].style.color="green";


let elementoLargo= document.getElementById("largo")
elementoLargo.style.backgroundColor ="red"

let button = document.getElementById("no_tocar")
button.addEventListener("click",function(){
    alert("TE DIJE QUE NO TOCAR EL BOTON")
})

// crear un boton en el html con un id color
// y que este al darle click cambie su color de fondo
// a rojo
const boton = document.getElementById("color");
boton.addEventListener("click", function () {
  boton.style.backgroundColor = "red";
});

let form = document.getElementById("form_nombre")
form["input_nombre"].addEventListener,"input",function(event){
  form["input_nombre"].value = form["input_nombre"].value.toUpperCase()
}
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("El nombre que vas a enviar es: " + form["input_nombre"].value)
    let resultado = document.createElement("div")
    resultado.innerHTML+= ` <p>Bienvenido seas, ${form["input_nombre"].value}</p> `
    
    form.appendChild(resultado)
})
*/

// Tres pasos para escuchar a una evento:
// Capturar, escuchar y reaccionar

let form = document.getElementById("change_button");
let button = document.getElementById("test_button");

form["text_color"].addEventListener("change", function(event){
  event.preventDefault;
  console.log(form["text_color"].value)
  button.style.color = form["text_color"].value;

})

form["text_background"].addEventListener("change", function(event){
  event.preventDefault;
  console.log(form["text_background"].value)
  button.style.backgroundColor = form["text_background"].value;
})
form["text_size"].addEventListener("change", function(event){
    event.preventDefault;
    console.log(form["text_size"].value)
    button.style.width= form["text_size"].value;
    
})
window.addEventListener("resize",function(){
  console.log(window.innerWidth);
  if (this.window.innerWidth<700){
    button.style.backgroundColor="blue"
  }
else if(this.window.innerWidth<1100){
  button.style.backgroundColor="orange"
}
})
