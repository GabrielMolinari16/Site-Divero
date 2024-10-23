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
    const resultsDiv = document.getElementById('search-results');
    let noResults = document.querySelector('#noResults');

    // Limpa a lista de resultados anteriores
    resultsDiv.innerHTML = '';

    // Oculta os resultados se a barra de busca estiver vazia
    if (query === '') {
        resultsDiv.style.display = 'none';
        return;
    }

    let resultadoEncontrado = false;

    // Itera por todos os subtítulos
    subtitles.forEach(subtitle => {
        if (subtitle.textContent.toLowerCase().includes(query)) {
            resultadoEncontrado = true;

            // Cria um item de lista para cada subtítulo encontrado
            const listItem = document.createElement('div');
            listItem.classList.add('search-result-item');
            listItem.textContent = subtitle.textContent;

            // Adiciona o evento de clique ao item da lista
            listItem.addEventListener('click', (function(subtitle) {
                return function() {
                    const section = subtitle.closest('section');
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Limpa a busca após o clique
                    document.getElementById('search-bar').value = '';
                    resultsDiv.innerHTML = '';
                    resultsDiv.style.display = 'none';
                };
            })(subtitle));

            // Adiciona o item à lista de resultados
            resultsDiv.appendChild(listItem);
        }
    });

    // Exibe os resultados se houver correspondências
    if (resultadoEncontrado) {
        resultsDiv.style.display = 'block';
        if (noResults) {
            noResults.remove();
        }
    } else {
        resultsDiv.innerHTML = '<div id="noResults" style="display: flex; justify-content: center;">Nenhum resultado encontrado</div>';
    }
}

// Função para controlar a exibição dos resultados com base no foco do input
function handleInputFocus() {
    const searchBar = document.getElementById('search-bar');
    const resultsDiv = document.getElementById('search-results');

    // Se o input estiver focado e houver texto, mostrar os resultados
    if (searchBar.value.trim() !== '') {
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.style.display = 'none';
    }
}

// Evento para ocultar os resultados ao clicar fora
document.addEventListener('click', function(event) {
    const searchBar = document.getElementById('search-bar');
    const resultsDiv = document.getElementById('search-results');

    // Verifica se o clique foi fora do search-bar e da resultsDiv
    if (!searchBar.contains(event.target) && !resultsDiv.contains(event.target)) {
        resultsDiv.style.display = 'none';
    }
});

// Evento para mostrar os resultados quando o campo de busca estiver em foco
document.getElementById('search-bar').addEventListener('focus', handleInputFocus);

// Evento para atualizar os resultados enquanto o usuário digita
document.getElementById('search-bar').addEventListener('input', updateSearchResults);

