$("#btn-save").click(saveProduct);
$("#btn-clean").click(cleanList);
$("#productosTable").hide();


imprimirTabla();

function cleanList() {
    localStorage.clear();
    location.reload();
}

function saveProduct() {

    let pid = $("#form-id").val();
    let pnombre = $("#form-product").val();
    let pprecio = $("#form-price").val();
    let pcantidad = $("#form-cantidad").val();

    addProduct(pid, pnombre, pprecio, pcantidad);
    imprimirTabla();
}

function imprimirTabla() {
    let list = obtenerListaProductos();
    let tbody = document.querySelector("#productosTable tbody");

    tbody.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i);
        let cellID = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);

        cellID.innerHTML = list[i].id;
        cellNombre.innerHTML = list[i].nombre;
        cellPrecio.innerHTML = list[i].precio;
        cellCantidad.innerHTML = list[i].cantidad;

        tbody.appendChild(row);
    }
}


$(document).ready(function () {
    $("#hide").click(function () {
        $("#productosTable").hide(1000);
    });
    $("#show").click(function () {
        $("#productosTable").show(1000);
    });
});