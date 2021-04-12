

var productos = [
    {id: 1, marca: "Adidas", nombre: "Adizero", tipo: "pasto natural", precio: "$7500", talle: "42"},
    {id: 2, marca: "Nike", nombre: "Mercurial", tipo: "pasto sintetico", precio: "$5000", talle: "41"},
    {id: 3, marca: "Puma", nombre: "Monarch", tipo: "pasto natural", precio: "$6500", talle: "38"},
    {id: 4, marca: "Adidas", nombre: "Predator", tipo: "pasto natural", precio: "$7500", talle: "43"},
  ]
  
  var botinSelecionado = productos.map(function(botines) {
    return `El botin que usted selecciono es ${botines.marca} y el talle disponible es ${botines.talle}` ;
  });
  console.log (botinSelecionado)

export default productos;
 
