const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	movil: /^\d{7,14}$/, // 7 a 14 numeros.
	dni: /^\d{8}[A-Z]$/
}


const campos = {
	name: false,
	password: false,
	email: false,
	movil: false
}

let NOMBRE11 = document.getElementById("form-nombre")
let INPUTNOMBRE = document.getElementById("name")
let DIVNOMBRE = document.getElementById("formulario-name")
let PARRAFO = document.getElementById("parrafo")

let APELLIDO = document.getElementById("form-surname")
let APELLIDO11 = document.getElementById("form-surname")
let INPUTAPELLIDO = document.getElementById("surname")
let DIVAPELLIDO = document.getElementById("formulario-surname")
let PARRAFO1 = document.getElementById("parrafo1")


let DNI = document.getElementById("form-dni")
let DNI11 = document.getElementById("formulario-dni")
let INPUTDNI = document.getElementById("nif")
let DIVDNI = document.getElementById("formulario-dni")
let PARRAFO3 = document.getElementById("parrafo3")



let EMAIL = document.getElementById("formulario-email")
let EMAIL11 = document.getElementById("formulario-email")
let INPUTEMAIL = document.getElementById("email")
let DIVEMAIL = document.getElementById("formulario-email")
let PARRAFO5 = document.getElementById("parrafo5")


let MOVIL= document.getElementById("formulario-movil")
let MOVIL11 = document.getElementById("formulario-movil")
let INPUTMOVIL = document.getElementById("numovil")
let DIVMOVIL = document.getElementById("formulario-movil")
let PARRAFO4 = document.getElementById("parrafo4")

let PASSWORD = document.getElementById("formulario-password")
let PASSWORD11 = document.getElementById("formulario-password")
let INPUTPASSWORD = document.getElementById("password")
let DIVPASSWORD = document.getElementById("formulario-password")
let PARRAFO6 = document.getElementById("parrafo6")

let CODPOSTAL = document.getElementById("formulario-cp")
let CODPOSTAL11 = document.getElementById("formulario-cp")
let INPUTCODPOSTAL = document.getElementById("codigopostal")
let DIVCODPOSTAL = document.getElementById("formulario-cp")
let PARRAFO7 = document.getElementById("parrafo7")

let EXITO = document.getElementById("formulario-mensaje-exito")
let ERROR = document.getElementById("formulario-mensaje")

let BOTON1 = document.getElementById("boton1")
let BOTON2 = document.getElementById("boton2")

function funcionombre () {
	if(!INPUTNOMBRE.value) {
    console.log('está vacío')  
	NOMBRE11.classList.add('formulario-grupo-incorrecto')
    PARRAFO.classList.remove('hidden')
	}else{
	console.log('esta relleno')
	NOMBRE11.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
	PARRAFO.classList.add('hidden')
	}
}
INPUTNOMBRE.addEventListener('click', funcionombre)
INPUTNOMBRE.addEventListener('change', funcionombre) 



function funcionapellido () {
	if(!INPUTAPELLIDO.value) {
		console.log('esta vacío')
		APELLIDO.classList.add('formulario-grupo-incorrecto')
		PARRAFO1.classList.remove('hidden')
		}else{
		console.log('esta relleno')
		APELLIDO.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
		PARRAFO1.classList.add('hidden')	
	}
}
INPUTAPELLIDO.addEventListener('click', funcionapellido)
INPUTAPELLIDO.addEventListener('click', funcionapellido)

function funciondni () {
	if(!INPUTDNI.value || !expresiones.dni.test(INPUTDNI.value)) {
		console.log(!INPUTDNI.value ? 'está vacío' : 'no cumple formato')
		DNI.classList.add('formulario-grupo-incorrecto')
		PARRAFO3.classList.remove('hidden')
		}else{ 
		console.log('esta relleno')
		DNI.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
		PARRAFO3.classList.add('hidden')
	}
}
INPUTDNI.addEventListener('click', funciondni)
INPUTDNI.addEventListener('click', funciondni)

function funcionemail () {
	if(!INPUTEMAIL.value) {
		console.log('está vacío')
		EMAIL.classList.add('formulario-grupo-incorrecto')
		PARRAFO5.classList.remove('hidden')
		}else{
        console.log('esta relleno')
		EMAIL.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
		PARRAFO5.classList.add('hidden')
	}
}
INPUTEMAIL.addEventListener('click', funcionemail)
INPUTEMAIL.addEventListener('click', funcionemail)

function funcionmovil () {
	if(!INPUTMOVIL.value) {
		console.log('esta vacío')
	MOVIL.classList.add('formulario-grupo-incorrecto')
	PARRAFO4.classList.remove('hidden')
	}else{
		console.log('esta relleno')
	MOVIL.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
	PARRAFO4.classList.add('hidden')
	}
}
INPUTMOVIL.addEventListener('click', funcionmovil)
INPUTMOVIL.addEventListener('click', funcionmovil)

function funcioncontraseña () {
	if(!INPUTPASSWORD.value) {
		console.log('esta vacío')
		PASSWORD.classList.add('formulario-grupo-incorrecto')
		PARRAFO6.classList.remove('hidden')
	}else{
		console.log('esta relleno')
		PASSWORD.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
		PARRAFO6.classList.add('hidden')
	}
}
INPUTPASSWORD.addEventListener('click', funcioncontraseña)
INPUTPASSWORD.addEventListener('click', funcioncontraseña)

function funcioncodigopostal () {
	if(!INPUTCODPOSTAL.value) {
		console.log('esta vacío')
		CODPOSTAL.classList.add('formulario-grupo-incorrecto')
		PARRAFO7.classList.remove('hidden')
	}else{
		console.log('esta relleno')
		CODPOSTAL.classList.replace('formulario-grupo-incorrecto', 'formulario-grupo-correcto')
		PARRAFO7.classList.add('hidden')
	}
}
INPUTCODPOSTAL.addEventListener('click', funcioncodigopostal)
INPUTCODPOSTAL.addEventListener('click', funcioncodigopostal)


function funcionmensaje () {
	if(campos !=false) {
		console.log('esta vacio') 
		ERROR.classList.remove('hidden')
	}else{
		console.log('esta lleno')
		ERROR.classList.add('hidden')
		EXITO.classList.remove('hidden')
	}
}

BOTON1.addEventListener('click', funcionmensaje)



