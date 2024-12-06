const productos = []


let saldoProducto = 0
let saldoTotal
esString = ""
function crearProducto (codigo, nombre, precio, cantidad){
    productos.push({
        codigo, 
        nombre,
        precio,
        cantidad
    })
}

function mostrarProductos(){
    let mensaje = "Listado de productos: "

    for (let i = 0; i < productos.length; i++) {
        mensaje += "\n COD " + productos[i].codigo + "  PRODUCTO: " + productos[i].nombre + "  CANTIDAD: " + productos[i].cantidad 
    }
    alert(mensaje)
}

function validarDatos(dato) {
    return !isNaN(dato);
}


function logicaDeValidacion(pregunta) {
    let numero = Number(prompt(pregunta));
    let validado = validarDatos(numero);

    while (!validado) {
        alert("Eso no es un número");
        numero = Number(prompt(pregunta));
        validado = validarDatos(numero);
    }

    return numero;
}
function verSaldoTotal(){
    alert("El saldo total de los productos ingresados es de: $" + saldoProducto)

}


function core(){
    
    let bandera = true;
    let creacion = confirm("Bienvenido, ¿Desea ingresar un nuevo producto?")
        while(bandera){
            
            codigo = logicaDeValidacion("Ingrese el codigo de producto");
            nombre = prompt("Ingrese el nombre del producto")
            precio = logicaDeValidacion("Ingrese el precio del producto")
            cantidad = logicaDeValidacion("¿Cuantas unidades desea ingresar?")
            bandera = confirm("¿Desea ingresar otro producto?")
            crearProducto(codigo, nombre, precio, cantidad)
            saldoProducto = saldoProducto + (precio * cantidad)
                        
        }
        mostrarSaldoTotal = confirm("¿Desea conocer el saldo total de los productos ingresados?")
        if (mostrarSaldoTotal){
            verSaldoTotal()
            
        }
        
        mostrarListadoProductos = confirm("¿Desea ver el listado de productos?")
        if(mostrarListadoProductos){
            mostrarProductos()

        }
        
    }
    
    

core();

