const urlJoke = 'https://icanhazdadjoke.com/';
const urlTiempo = 'https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08279'
let button = document.getElementById("button");
let element = document.getElementById('element');
let tiempo = document.getElementById('tiempo');
//funcion que se ejecute cuando clique un usuario
//fetch a la api y muestra un resultado por pantalla

function getJoke(){ 
    //conseguir chiste de la api
    //Mostrar por pantalla

    fetch(urlJoke, {
        headers: { 'Accept': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
    
            element.innerHTML = `
            <p>${data.joke}</p>
            `;
            
            console.log(data);
        })
        .catch(err => console.log(err));
    
}

//evento click que llame a funcion

button.addEventListener("click", getJoke);





function mostrarTiempo(){ 
    //conseguir chiste de la api
    //Mostrar por pantalla

    fetch(urlTiempo, {
        method:"GET"
    })
        .then(response => response.json())
        .then(data => {
    
            tiempo.innerHTML = `
            <p>${data.fecha} / ${data.municipio.NOMBRE}  / ${data.stateSky.description} / ${data.temperatura_actual}ºC / ${data.humedad}% de humedad</p>
            `;
            
            console.log(data);
        })
        .catch(err => console.log(err));
    
}
mostrarTiempo();
