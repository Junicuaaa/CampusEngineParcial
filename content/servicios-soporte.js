import inicio from "../config/content1.js"
export default{
    loadInicio(){
        let contenedor = document.querySelector(".container1");
        (()=>{
            inicio.serviciosSoporteData.nav.forEach(element =>{
                let html = ``
                html += `
                    <img class="img" id="logo" src="${element.Img}" alt="">
                    <a class="alink" href="${element.inicio}">Inicio</a> 
                    <a class="alink" href="${element.servicios}">Servicios</a> 
                    <a class="alink" href="${element.soporte}">Soporte</a>     
                `
                contenedor.insertAdjacentHTML("beforeend", html);
            });
        })();
    }
}
