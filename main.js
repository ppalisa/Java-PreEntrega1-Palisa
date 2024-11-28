// Carrito de compra de Natural Mood

// Variables de cantidades
let velaaromaticaCantidad = 0, difusorCantidad = 0;

// Variables de precios
let velaaromaticaPrecio = 10600, difusorPrecio = 10000;

// Validar nombre
let validacionUsuario = false
do{
    let nombreCliente = prompt ("Bienvenido a Natural Mood, por favor ingrese su nombre");
    if (nombreCliente){
        validacionUsuario = true
        alert("Hola "+ nombreCliente );
    }else{
        validacionUsuario = false
        alert("No ingreso un nombre");
    }
}while (validacionUsuario == false)

    if (validacionUsuario == true){
        carrito();
    }

//Funcion sumar productos
function sumaTotal(){

    let totalVelaaromatica;
    let totalDifusores;

    totalVelaaromatica = velaaromaticaPrecio * velaaromaticaCantidad;

    totalDifusores = difusorPrecio * difusorCantidad;

    return totalVelaaromatica + totalDifusores;
}


// Funcion Carrito
function carrito(){
    alert("Ahora será dirigido a la tienda de Natural Mood");
    let check;
    check = confirm("¿Quiere comprar alguno de nuestros productos?");
    let seguir;
    let salir;
    let cantidadRequerida;
    do{
        if (check == true) {

            let opciones = prompt("Para comprar velas aromáticas ingrese 1\nPara comprar home sprays ingrese 2\nSi no desea comprar ninguno de los productos ingrese 3");
            opciones = parseInt(opciones, 10);

            switch (opciones) {
                case 1:
                    cantidadRequerida = prompt("Ingrese la cantidad de velas aromaticas que desea comprar");
                    cantidadRequerida = parseInt(cantidadRequerida, 10);
                    if (cantidadRequerida != 0) {
                        velaaromaticaCantidad = velaaromaticaCantidad + cantidadRequerida;
                        seguir = confirm("Quiere comprar otro producto");
                        if (seguir == false){ 
                            alert("Usted tiene en el carrito "+difusorCantidad+" difusores y "+velaaromaticaCantidad+" velas aromaticas");
                            alert("El precio total es "+sumaTotal());
                            alert("Gracias por su compra, saludos"); }
                    }
                    break;
                
                case 2:
                    cantidadRequerida = prompt("Ingrese la cantidad de difusores que desea comprar");
                    cantidadRequerida = parseInt(cantidadRequerida, 10);
                    if (cantidadRequerida != 0) {
                        difusorCantidad = difusorCantidad + cantidadRequerida;
                        seguir = confirm("Quiere comprar otro producto");
                        if (seguir == false){ 

                            alert("Usted tiene en el carrito "+difusorCantidad+" difusores y "+velaaromaticaCantidad+" velas aromaticas");
                            alert("El precio total es "+sumaTotal());
                            alert("Gracias por su compra, saludos"); } 
                    }
                    break;

                case 3:
                    salir = confirm("¿Usted esta seguro que quiere salir de la tienda?\nTenga en cuenta que si usted sale de la tienda perdera todos los productos ya cargados en el carrito");
                    if (salir == true){ 
                        alert("Saludos, que tenga un buen día")
                        break; 
                    }
                    else { seguir = true; };
                    break;

                default:
                    alert("Usted no ingreso un comando válido");
                    seguir = true;
            }
        }
    } while (seguir == true)   
}



