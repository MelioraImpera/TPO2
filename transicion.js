/*  Boton "Ir arriba"  */
buttonUP = document.getElementById('button-up')
buttonUP.addEventListener('click', scrollUp);

function scrollUp(e){
    var irArriva = document.documentElement.scrollTop;
    if(irArriva > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, irArriva - (irArriva/10));
        buttonUP.style.transform = "scale(0)";
    }
}

window.onscroll = function(){
    var deslizar = document.documentElement.scrollTop;
    if(deslizar > 500){
        buttonUP.style.transform = "scale(1)";
    }else if(deslizar<500){
        buttonUP.style.transform = "scale(0)";
    }
}