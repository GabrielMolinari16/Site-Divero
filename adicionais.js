
function formataSubtitulo(){
    if(window.innerWidth > 970){
        let subtitulos = document.querySelectorAll('.subtitulo');
        
        subtitulos.forEach( subtitulo => {
            console.log(subtitulo.textContent);
        
            let texto = subtitulo.textContent;
        
            if(texto.includes('-')){
        
                let partesTexto = texto.split('-');
        
                subtitulo.innerHTML = `${partesTexto[0].trim()} - <strong style="margin-left: 7px; line-height: 1.35cap;">  ${partesTexto[1].trim()}</strong>`;
            }
        });
    }
};

formataSubtitulo();
window.addEventListener('resize', formataSubtitulo);