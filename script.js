
function carregar() {

var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data= new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`

//var hora = 3


if (hora >=5 && hora <12)  {
    //bom dia
    img.src = 'manha.jpg'
    document.body.style.background = 'rgba(135, 206, 235, 0.73)';     
    
}
else if (hora >=12 && hora <18) {
    //boa tarde
    img.src= 'tarde.jpg'
    document.body.style.background = 'rgba(255, 218, 0, 0.73)';     
    
}
else if (hora >=18 && hora <=23) {
    //boa noite 
    img.src= 'inicio.da.noite.jpg'
    document.body.style.background = 'rgba(25, 25, 112, 0.73)';     
    
}
else {
    // de madrugada
    img.src= 'noite.jpg'
    document.body.style.background = 'rgba(30, 30, 30, 0.73)';     
    
}

}