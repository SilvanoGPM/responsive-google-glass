const image = document.querySelector('.selected-img');
const pageImg = image.src;
const links = document.querySelectorAll('header li');
links.forEach(link => {
    link.addEventListener('mouseover', changeImg);
    link.addEventListener('mouseout', changeImg);
});

let afterTime = 0;
function changeImg(evt) {
    if (evt.type === "mouseover") {
        const element = evt.srcElement.text || "pageImg";
        image.src = imgs[element];
    } else {
        image.src = pageImg;
    }
}

const imgs = {
    "Home": "img/home.png",
    "Especificações": "img/especificacoes.png",
    "Fotos": "img/fotos.png",
    "Multimídia": "img/multimidia.png",
    "Fale conosco": "img/contato.png",
    pageImg,
}