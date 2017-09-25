function validarForm(){
  if(validarLetras('nombre') && validarLetras('apellido')){
    var elemento = document.getElementById('nombre');
    var nombre = elemento.value;
    elemento = document.getElementById('apellido');
    var apellido = elemento.value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var valoracion = document.querySelector('input[name="valoracion"]:checked').value;
    var msg = "Nombre "+nombre+"\nApellido "+apellido;
    if (sexo != null){
      msg = msg+"\nSexo "+sexo;
    }
    if (valoracion != null){
      msg = msg+"\nValoracion "+valoracion;
    }

    alert(msg);
  }
}

function validarLetras(id) {
  var elemento = document.getElementById(id);
    if (elemento.value == "") {
        alert("Enter a name");
        elemento.focus();
        return false;
    }
    else if (!/^[a-zA-Z]*$/g.test(elemento.value)) {
        alert("Caracteres invalidos");
        elemento.focus();
        return false;
    } else{
      return true;
    }
}

function borrarCampo(id){
  var elemento = document.getElementById(id);
  elemento.value= "";
}

function restablecer(){
  borrarCampo('nombre');
  borrarCampo('apellido');
  borrarCampo('fnac');
}

function canc(){
  var resp = confirm("Desea cancelar?");
  if (resp){
    restablecer();
    return true;
  } else {
    return false;
  }
}

function cambiarOpac(elemento) {
  if (elemento.children[0].style.opacity != 0.5){
    elemento.children[0].style.opacity=0.5;
    setTotalCarrito(parseInt(getTotalCarrito())+parseInt(elemento.children[3].children[0].innerHTML));

      msg="Se agrego $"+elemento.children[3].children[0].innerHTML+ " al carrito.\nEl nuevo total es $"+getTotalCarrito()+".";
      alert(msg);
  } else {
    elemento.children[0].style.opacity=1;
    setTotalCarrito(parseInt(getTotalCarrito())-parseInt(elemento.children[3].children[0].innerHTML));
    msg="Se resto $"+elemento.children[3].children[0].innerHTML+ " al carrito.\nEl nuevo total es $"+getTotalCarrito()+".";
    alert(msg);
  }

}

function getTotalCarrito(){
  return document.getElementById('total').innerHTML;
}
function setTotalCarrito(total){
  var elemento = document.getElementById('total');
  elemento.innerHTML=total;
}

function mouseSobre(elemento){
  if (elemento.style.backgroundColor=="lightblue"){
    elemento.style.backgroundColor="#42a5f5";
  } else {
    elemento.style.backgroundColor="lightblue";
  }
}

window.onload = function(){
}
