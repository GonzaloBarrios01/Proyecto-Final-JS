//INDEX

//Agregar Elementos
const productos = [{nombre: "Ravioles de mozzarella y jamón", descripcion: "mozzarella, jamón, albahaca, crema, tomate", precio: "$760"},
{nombre: "Ensalada Cesar", descripcion: "Lechuga, croutons de pan, pollo, panceta y crema de limón", precio: "$860"},
{nombre: "Ensalda caprese", descripcion: "tomate, mozzarella y albahaca", precio: "$860"},
{nombre: "Pamplona de pollo rellena", descripcion: "pollo, queso, jamón y tomates", precio: "$1080"},
{nombre: "Vegetales A La Parrilla", descripcion: "Jitomate, Cebolla, Pimiento verde, Calabaza, Champiñon", precio: "$480"}];


for (const producto of productos) {
    $("#container").append(`<div class="col-3 py-3">
                            <div class="container-fluid">
                            <div class="card bg-transparent" style="width:  14rem;">
                            <div class="card-body">
                            <ul class="descripcion">
                            <li><strong> <b>${producto.nombre}</b></strong></li>
                            <li> Ingredientes:</li>
                            <li>${producto.descripcion}</li>
                            <li><strong> ${producto.precio} </strong></li>
                            <button type="button" class="btn btn-dark" onclick="Compra();"> Agregar al carrito </button>
                            </ul>
                            </div>
                            </div>
                            </div>`);
}

function Compra(){
    $("header").prepend("<p class='alert alert-dark text-black' id='coder1' > Agregado al Carrito </p>");
    $("#coder1").fadeIn(2000);
    $("#coder1").fadeOut(3000);
}
//RESERVA TU MESA

//CONTADOR
texto = document.getElementById("contador");
opcion = parseInt(texto.innerText);
console.log(opcion);

function restar(){
    if(opcion > 1){
        opcion = (opcion - 1);
        console.log(opcion);
        texto.innerHTML = opcion;
        textAlert = document.getElementById("alertaContador");
        var contenido = "";
        document.getElementById("alertaContador").innerHTML = contenido;
    }
}
function sumar(){
    if(opcion >= 1 && opcion < 15){
        opcion = (opcion + 1);
        console.log(opcion);
        texto.innerHTML = opcion;
    }else if(opcion == 15){
        textAlert = document.getElementById("alertaContador");
        contenido = "<p class='alert alert-dark text-black' > No pueden ingresar mas de " + opcion + " personas </p>";
        document.getElementById("alertaContador").innerHTML = contenido;
    }
}

//VALIDAR DATOS
function validarDatos(){
    //Validar Nombre
    nombre = document.getElementById("nombre").value;
    console.log(nombre)
    if(nombre == ""){
        var contenido = "<p class='text-danger'> *Este campo es obligatorio*</p>";
        document.getElementById("alertNombre").innerHTML = contenido;
       i++
    }else{
        var contenido = "";
        document.getElementById("alertNombre").innerHTML = contenido;
    }

    // Validar email
    email = document.getElementById("email").value;
    console.log(email);
    if(email == ""){
        var contenido = "<p class='text-danger'> *Este campo es obligatorio*</p>";
        document.getElementById("alertEmail").innerHTML = contenido;
       i++
    }else{
        var contenido = "";
        document.getElementById("alertEmail").innerHTML = contenido;
    }

    // Validar Numero de Contacto
    telefono = document.getElementById("telefono").value;
    console.log(telefono);
    if(telefono == ""){
        var contenido = "<p class='text-danger'>*Este campo es obligatorio*</p>";
        document.getElementById("alertTelefono").innerHTML = contenido;
        return false
    }else{
        var contenido = "";
        document.getElementById("alertTelefono").innerHTML = contenido;
    }

    //Cambiar texto del boton
    texto = ("Reserva exitosa")
    document.getElementById("solicitarReserva").innerHTML = texto;

    contenido = "<p class='text-dark'>Revisa tu correo, los datos fueron enviados a <strong>'" + email + "'</strong></p>";
    document.getElementById("alertButton").innerHTML = contenido;

    setTimeout(function(){
        texto = ("Solicitar reserva")
        document.getElementById("solicitarReserva").innerHTML = texto;

        contenido = "";
        document.getElementById("alertButton").innerHTML = contenido;
    },3000);
}

function agregarPrducto(){
    i = 0;

    let arrayProductos = [];

    class Productos{
        constructor(nombre, descripcion, precio){
            this.nombre = nombre
            this.descripcion = descripcion
            this.precio = parseFloat(precio);
        }
    }

    //Validar Nombre
    nombre = document.getElementById("nombreProducto").value;
    console.log(nombre)
    if(nombre == ""){
        var contenido = "<p class='text-danger'> *Este campo es obligatorio*</p>";
        document.getElementById("alertNombreProducto").innerHTML = contenido;
       i++
    }else{
        var contenido = "";
        document.getElementById("alertNombreProducto").innerHTML = contenido;
    }

    //Validar Descripcion
    descripcion = document.getElementById("descripcionProducto").value;
    console.log(descripcion)
    if(descripcion == ""){
        var contenido = "<p class='text-danger'> *Este campo es obligatorio*</p>";
        document.getElementById("alertDescripcionProducto").innerHTML = contenido;
       i++
    }else{
        var contenido = "";
        document.getElementById("alertDescripcionProducto").innerHTML = contenido;
    }

    //Validar Precio
    precio = document.getElementById("precioProducto").value;
    console.log(parseFloat(precio))
    function isNum(val){
        return !isNaN(val)
    }
    validar = isNum(precio)
    console.log(validar);
    if(precio == ""){
        var contenido = "<p class='text-danger'> *Este campo es obligatorio*</p>";
        document.getElementById("alertPrecioProducto").innerHTML = contenido;
       i++
    }else if(validar == false){
        var contenido = "<p class='text-danger'> *El dato ingresado no es un numero*</p>";
        document.getElementById("alertPrecioProducto").innerHTML = contenido;
       i++
    }else if(validar == true){
        var contenido = "";
        document.getElementById("alertPrecioProducto").innerHTML = contenido;
    }

    if(i >=1){
        return false
    }

    let producto = new Productos (nombre, descripcion, precio);
    arrayProductos.push(producto);
    console.log(arrayProductos);
    console.log(arrayProductos.length);

    document.getElementById("agregarPrducto").innerHTML = ("Guardado");
    setTimeout(function(){
        document.getElementById("agregarPrducto").innerHTML = ("Guardar");
    },3000);
}

//Mostrar Mesas Reservadas
function mostrarDatos(){
    $.get("../js/datos.json", function (data, status) {
        if (status === "success"){
            console.log(data);
            for (const dato of data) {
                $("#data").append(  `<div class="descripcion">
                                    <ul class="descripcion">
                                    <li> ${dato.nombre} </li>
                                    <li> ${dato.mail} </li>
                                    <li> ${dato.telefono} </li>
                                    <li> Cantidad de personas: ${dato.personas} </li>
                                    </ul>
                                    </div>`);
            }
        }
    });
}
