document.addEventListener('DOMContentLoaded', function(){
    // Expande ou recolhe grupos
    document.querySelectorAll('.item-menu').forEach(function(itemMenu){
        itemMenu.addEventListener('click', function(){
            document.querySelectorAll('.grupo').forEach(function(grupo) {
                grupo.classList.remove('expandido');
            });

            let grupos = this.querySelectorAll('.grupo');
            if(grupos){
                grupos.forEach(item => 
                    item.classList.toggle('expandido')
                )
            }
        });
    });

    // Enpande ou recolhe os subgrupos
    document.querySelectorAll('.grupo > a').forEach(function(grupoA){

        grupoA.addEventListener('click', function(){
            let subgrupos = this.parentElement.querySelectorAll('.subgrupo');
            subgrupos.forEach(function(subgrupo){
                subgrupo.classList.toggle('expandido');
            })
            
        });
    });

    // Expande ou recolhe os tipos 
    document.querySelectorAll('.subgrupo > a').forEach(function(subgrupoA){
       
        subgrupoA.addEventListener('click', function(){
            let tipos = this.parentElement.querySelectorAll('.tipo');
             tipos.forEach(function(tipo){
                 tipo.classList.toggle('expandido');
             })
            
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    // Expande ou recolhe grupos
    document.querySelectorAll('.item-menu-mobile').forEach(function(itemMenuMobile){
        itemMenuMobile.addEventListener('click', function(){
            document.querySelectorAll('.grupo-mobile').forEach(function(grupo) {
                grupo.classList.remove('expandido');
            });

            let grupos = this.querySelectorAll('.grupo-mobile');
            if(grupos){
                grupos.forEach(item => 
                    item.classList.toggle('expandido')
                )
            }
        });
    });

    // Enpande ou recolhe os subgrupos
    document.querySelectorAll('.grupo-mobile > a').forEach(function(grupoAMobile){

        grupoAMobile.addEventListener('click', function(){
            let subgruposMobile = this.parentElement.querySelectorAll('.subgrupo-mobile');
            subgruposMobile.forEach(function(subgrupo){
                subgrupo.classList.toggle('expandido');
            })
            
        });
    });

    // Expande ou recolhe os tipos 
    document.querySelectorAll('.subgrupo-mobile > a').forEach(function(subgrupoAMobile){
       
        subgrupoAMobile.addEventListener('click', function(){
            let tiposMobile = this.parentElement.querySelectorAll('.tipo-mobile');
             tiposMobile.forEach(function(tipo){
                 tipo.classList.toggle('expandido');
             })
            
        });
    });
});