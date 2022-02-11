let productosList = [];

function addProduct (pid,pnombre,pprecio,pcantidad) {

    let newProduct = {
        id:pid,
        nombre:pnombre,
        precio:pprecio,
        cantidad:pcantidad
    };

    console.log(newProduct);
    productosList.push(newProduct);
    localStoreProductList(productosList);
}

function obtenerListaProductos () {
    let listaAlmacenada = localStorage.getItem("localProductList")
    if (listaAlmacenada == null) {
        productosList = [];
    } else {
        productosList = JSON.parse(listaAlmacenada);
    }
    return productosList;
}


function localStoreProductList (plist) {

    localStorage.setItem("localProductList", JSON.stringify(plist));

}