const itens_menu = document.querySelectorAll('.item-menu');
const menu_lateral = document.querySelector('nav.menu-lateral')
 

if(itens_menu){
    
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
        // Obtém o valor da pesquisa
        const query = document.getElementById('search-bar').value.toLowerCase();

        // Seleciona todos os elementos com a classe 'subtitulo'
        const subtitles = document.querySelectorAll('.subtitulo');

        // Limpa a lista de resultados anteriores
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = '';

        // Verifica se o campo de busca não está vazio
        if (query !== '') {
            // Itera por todos os subtítulos
            subtitles.forEach(subtitle => {
                // Verifica se o subtítulo contém o valor pesquisado
                if (subtitle.textContent.toLowerCase().includes(query)) {
                    // Cria um elemento de lista para cada resultado
                    const listItem = document.createElement('div');
                    listItem.classList.add('search-result-item');
                    listItem.textContent = subtitle.textContent;

                    // Adiciona um evento de clique ao item da lista
                    listItem.onclick = () => {
                        const section = subtitle.closest('section');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                        // Limpa a busca após clicar
                        document.getElementById('search-bar').value = '';
                        resultsDiv.innerHTML = '';
                    };

                    // Adiciona o item à lista de resultados
                    resultsDiv.appendChild(listItem);
                }
            });
        }
    }
