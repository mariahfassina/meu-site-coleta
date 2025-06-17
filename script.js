document.addEventListener('DOMContentLoaded', () => {
    // Função para buscar os dados do arquivo JSON
    async function loadContent() {
        try {
            const response = await fetch('public/data.json');
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados: ${response.status}`);
            }
            const data = await response.json();
            populateHTML(data.content);
        } catch (error) {
            console.error("Não foi possível carregar o conteúdo do site:", error);
        }
    }

    // Função para preencher o HTML com os dados do JSON
    function populateHTML(content) {
        // Função auxiliar para evitar repetição de código
        const setText = (id, text) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            }
        };

        const setSrc = (id, url) => {
            const element = document.getElementById(id);
            if (element) {
                element.src = url;
            }
        };

        // Preenchendo o cabeçalho
        setText('header-phone-secretaria', content.contato_phone_secretaria);
        setText('header-email-secretaria', content.contato_email_secretaria);
        setSrc('logo-prefeitura', content.index_logo_prefeitura_hero);

        // Preenchendo a seção Hero
        setSrc('hero-image', content.index_hero_image);

        // Preenchendo a seção Cronograma
        setSrc('cronograma-image', content.index_cronograma_image);

        // Preenchendo a seção Quem Somos
        setText('quemsomos-page-title', content.quemsomos_page_title);
        setText('coletaamiga-title', content.coletaamiga_title);
        setText('coletaamiga-text-p1', content.coletaamiga_text_p1);
        setText('coletaamiga-text-p2', content.coletaamiga_text_p2);
        setText('acamar-section-title', content.acamar_section_title);
        setText('acamar-text-p1', content.acamar_text_p1);
        setText('acamar-text-p2', content.acamar_text_p2);

        // Adicione aqui qualquer outro campo que precisar, seguindo o padrão:
        // setText('id-do-elemento', content.chave_do_json);
        // setSrc('id-da-imagem', content.chave_do_json_para_imagem);
    }

    // Inicia o carregamento do conteúdo
    loadContent();
    
    // Bônus: Código para o menu mobile (se você precisar)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if(menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
        });
    }
});