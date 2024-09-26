var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach(item =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
);

var menuItemMobile = document.querySelectorAll('.item-menu-mobile');

function selectLink_MenuMobile() {
    menuItemMobile.forEach(item =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItemMobile.forEach((item) =>
    item.addEventListener('click', selectLink_MenuMobile)
);

let btnAbrirMenu        = document.getElementById('btn_abrir');
let overlay             = document.getElementById('overlay');
let btnFecharMenu       = document.getElementById('btn_fechar');
let menuMobile          = document.getElementById('menu_mobile');

btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
    overlay.style.opacity = '1'
    overlay.style.display = 'block'
});

btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.opacity = '0'
    overlay.style.display = 'none'

});

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.opacity = '0'
    overlay.style.display = 'none'

});
