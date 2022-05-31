function buscador(){
    let buscar = document.getElementById("buscador").value
    fetch("http://localhost:3001/paises/"+ buscar )
    .then(paises => paises.json())
    .then(paises =>{
        console.log(paises)
    })
}