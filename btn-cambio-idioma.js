const boton = document.getElementById("boton-idioma");
let imgBotonIdioma = document.getElementById("img-boton-idiomas");
let iconoEspaniol = location.origin + '/portafolio-MC/icons/icon-espaniol.png';
let iconoIngles = location.origin + '/portafolio-MC/icons/icon-ingles.png';

boton.addEventListener('click', function() {
    console.log(location.origin);
    console.log();
    if(imgBotonIdioma.src == iconoIngles)
    {
        console.log("estas en la pagina en ingles");
        location.href = 'ing/index.html';
    }
    else if(imgBotonIdioma.src == iconoEspaniol){
        console.log("estas en la pagina en español");
        location.href = '../index.html';
    }
    else{
        console.log("no se puede ir a esa locacion");
    }
});