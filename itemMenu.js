const itens_menu = document.querySelectorAll('.item-menu');
const menu_lateral = document.querySelector('nav.menu-lateral')


if (itens_menu) {

    menu_lateral.addEventListener('mouseenter', () => {
        itens_menu.forEach(item => {
            item.classList.add('expanded');
        });
    });

    menu_lateral.addEventListener('mouseleave', () => {
        itens_menu.forEach(item => {
            item.classList.remove('expanded');
        });
    });
};

function updateSearchResults() {
    const query = document.getElementById('search-bar').value.toLowerCase().trim();
    const subtitles = document.querySelectorAll('.subtitulo');
    const noResults = document.querySelector('#noResults');
    const inputSearch = document.querySelector('#search-bar');
    const caixaInput = document.querySelector('.caixa-pesquisa');
    const resultsDiv = document.getElementById('search-results');

    resultsDiv.innerHTML = '';

    if (query === '') {
        resultsDiv.style.display = 'none';
    }

    let resultadoEncontrado = false;

    if (query !== '') {
        // Itera por todos os subtítulos
        subtitles.forEach(subtitle => {

            // Libera o display para aparecer os resultados da pesquisa
            resultsDiv.style.display = 'block';

            // Verifica se o subtítulo contém o valor pesquisado
            if (subtitle.textContent.toLowerCase().includes(query)) {

                // Cria um elemento de lista para cada resultado
                const listItem = document.createElement('div');
                listItem.classList.add('search-result-item');
                listItem.textContent = subtitle.textContent;

                resultadoEncontrado = true;

                if (resultadoEncontrado && noResults) {
                    noResults.remove();
                }

                // Adiciona um evento de clique ao item da lista
                listItem.addEventListener('click', function () {
                    const section = subtitle.closest('section');
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Limpa a busca após clicar
                    document.getElementById('search-bar').value = '';
                    resultsDiv.innerHTML = '';
                    resultsDiv.style.display = 'none';
                });

                // Adiciona o item à lista de resultados
                resultsDiv.appendChild(listItem);
            }

        });

        if (!resultadoEncontrado) {
            resultsDiv.innerHTML = '<div id="noResults" style="display: flex; justify-content: center;">Nenhum resultado encontrado</div>';
        }

        if (query === '') {
            resultsDiv.style.display = 'none';
        }
    }

    inputSearch.addEventListener('blur', function () {
        // resultsDiv.style.opacity = '0';
        setTimeout(() => {
            if (!resultsDiv.contains(document.activeElement)) {
                resultsDiv.style.display = 'none';
            }
        }, 100);
    });

    inputSearch.addEventListener('focus', function () {
        if (query !== '') {
            resultsDiv.style.display = 'block';
            // resultsDiv.style.opacity = '1';          
        }
    });

    // resultsDiv.addEventListener('mousedown', function() {
    //     inputSearch.focus();
    // })
}
