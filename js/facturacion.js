//ESPERA BOTO AGREGAR EMPRESA
$("#btn-agempresa").click(imprimirEmpresa);
$("#btn-agproducto").click(guardarProductoFactura);
$("#btn-impproductos").click(imprimirTablaFacturaProductos);
$("#btn-total").click(imprimirTotal);




//AGREGA EMPRESA AL DOM
function imprimirEmpresa() {
    let facturaEmpresa = $("#form-empresa").val();
    let facturaCuit= $("#form-cuit").val();
    let tbody = document.querySelector("#factura-empresa tbody");

    tbody.innerHTML = "";

    let row = tbody.insertRow(0);
    let cellEmpresa = row.insertCell(0);
    let cellCuit = row.insertCell(1);

    cellEmpresa.innerHTML = facturaEmpresa;
    cellCuit.innerHTML = facturaCuit;

    tbody.appendChild(row);
}


// SE GUARDAN PRODUCTOS QUE SE VAN A CARGAR EN LA FACTURA

let productosFacturar = []

function addProductosFacturar (pnombre,pprecio,pcantidad) {

    let newProduct = {
        nombre:pnombre,
        precio:pprecio,
        cantidad:pcantidad
    };

    console.log(newProduct);
    productosFacturar.push(newProduct);
}

let total=0;

// ALMACEN DE PRODUCTO
function guardarProductoFactura() {
    let total1=0;

    let list = obtenerListaProductos();
    let i = $("#form-solicitaID").val();
    let pnombre = list[i].nombre;
    let pprecio = list[i].precio;
    let pcantidad = $("#form-cantidadFactura").val();

    addProductosFacturar(pnombre, pprecio, pcantidad);
    alert("Producto Cargado");

    total1 = pprecio*pcantidad
    total = total1+total
    return (total);
    
}





function imprimirTablaFacturaProductos() {
    let list = productosFacturar;
    let tbody = document.querySelector("#factura-detalles tbody");

    tbody.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i);
        let cellNombre = row.insertCell(0);
        let cellCantidad = row.insertCell(1);
        let cellPrecio = row.insertCell(2);

        
        cellNombre.innerHTML = list[i].nombre;
        cellCantidad.innerHTML = list[i].cantidad;
        cellPrecio.innerHTML = list[i].precio;

        tbody.appendChild(row);
    }
}


function imprimirTotal() {
    let facturaTotal = total;
    let tbody = document.querySelector("#factura-total tbody");

    tbody.innerHTML = "";

    let row = tbody.insertRow(0);
    let cellTotal = row.insertCell(0);

    cellTotal.innerHTML = facturaTotal;

    tbody.appendChild(row);
}


//IMPRIMIR DIV CON JQUERY

function printContent(el) {
    var restorepage = $("body").html();
    var printcontent = $("#" + el).clone();
    $("body").empty().html(printcontent);
    window.print();
    $("body").html(restorepage);
}