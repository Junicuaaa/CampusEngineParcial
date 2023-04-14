import config from "../config/content1.js"
export default{
    showData(){
        let contenedor1 = document.querySelector(".title");
        let contenedor2 = document.querySelector(".catalog")
        contenedor1.insertAdjacentHTML("afterbegin", `<h2 class="catalogo-text">catalogo<h2>`)
        config.tiendaVirtual.forEach(element =>{
            let html = ``;
            html +=
            `
            <h1>${element.title}</h1>
            <p>${element.subtitle}</p>
            `
            contenedor1.insertAdjacentHTML("afterbegin", html);

        });
        (()=>{
           let html = ``;
            html += `<div class="card1">
            <div class="img-container">
            <img src="${config.tiendaVirtual[0].card1.img}" class="catalogo-img" alt="">
            </div>
            <h5>${config.tiendaVirtual[0].card1.title}</h5>
            <h5>${config.tiendaVirtual[0].card1.precio}</h5>
            </div>`
            contenedor2.insertAdjacentHTML("beforeend", html)
        })();
        (()=>{
            let html = ``;
             html += `<div class="card1">
             <img src="${config.tiendaVirtual[0].card2.img}"class="catalogo-img"  alt="">
             <h5>${config.tiendaVirtual[0].card2.title}</h5>
             <h5>${config.tiendaVirtual[0].card2.precio}</h5>
             </div>`
             contenedor2.insertAdjacentHTML("beforeend", html)
         })();
         (()=>{
            let html = ``;
             html += `<div class="card1">
             <img src="${config.tiendaVirtual[0].card3.img}"class="catalogo-img"  alt="">
             <h5>${config.tiendaVirtual[0].card3.title}</h5>
             <h5>${config.tiendaVirtual[0].card3.precio}</h5>
             </div>`
             contenedor2.insertAdjacentHTML("beforeend", html)
         })();
    }
}