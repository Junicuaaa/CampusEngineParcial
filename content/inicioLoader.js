import inicio from "../config/content1.js"
export default {
    loadInicio() {
        let contenedor = document.querySelector(".container1");
        let contenedor2 = document.querySelector(".container2");
        let contenedor3 = document.querySelector(".homepage");
        let contenedor4 = document.querySelector(".bodyContent");
        (() => {
            inicio.inicioData.nav.forEach(element => {
                let html = ``
                html += `
                    <img class="img" id="logo" src="${element.Img}" alt="">
                    <a class="alink" href="${element.inicio}">Inicio</a> 
                    <a class="alink" href="${element.servicios}">Servicios</a> 
                    <a class="alink" href="${element.soporte}">Soporte</a>     
                `
                contenedor.insertAdjacentHTML("beforeend", html)
            })
        })();
        (() => {
            inicio.inicioData.body.forEach(element => {
                let html = ``
                let html2 = ``
                html += `
                <h1>${element.title}</h1>
                <p>${element.subtitle}</p>
                `
                html2 += `
                <h3>${element.subtitle2}</h3>
                <p>${element.text}</p>
                `
                contenedor2.insertAdjacentHTML("beforeend", html)
                contenedor3.insertAdjacentHTML("afterend", html2)
            })
        })();
        (() => {
            inicio.inicioData.body.forEach(element => {
                let html = `
                <img src="${element.img2}" alt="">
                <div class="social">
                    <h2>${element.redestitle}</h2>
                    <div class=" contact-info-container team-container card1">
                        <img src="${element.wsp.img}" alt="" target="_blank"></img>
                        <a class="" href="">${element.wsp.info}</a> 
                    </div>
                    <div class=" contact-info-container team-container card2">
                        <img src="${element.twitter.img}" alt="https://twitter.com/CampusLatam"" target="_blank"></img>
                        <a class="" href="">${element.twitter.info}</a> 
                    </div>
                    <div class=" contact-info-container team-container card3">
                    <img src="${element.facebook.img}" alt="" target="_blank"></img>
                    <a class="" href="">${element.facebook.info}</a> 
                </div>
                <div class=" contact-info-container team-container card4">
                <img src="${element.ig.img}" alt="https://www.instagram.com/campusdevelopers/"></img>
                <a class="" href="" target="_blank">${element.ig.info}</a> 
            </div>
                </div> `
                contenedor4.insertAdjacentHTML("beforeend", html)
            })
        })();
    }
}
