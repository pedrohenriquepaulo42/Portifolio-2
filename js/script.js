const meusProjetos = [
    {
        id: 1,
        titulo: "Página de Detalhes - Nike Air Jordan",
        imagem: "img/nike.png",
        descricao: "Página de detalhes de produto com design moderno e focado na experiência de compra da linha Nike Air Jordan.",
        github: "https://github.com/kaiooalvess/nike-air-jordan-detalhes",
        demo: "https://kaiooalvess.github.io/nike-air-jordan-detalhes/"
    },
    {
        id: 2,
        titulo: "Portfólio Kaio Alves",
        imagem: "img/portifolio.png",
        descricao: "Template de portfólio moderno para Web Developer com interface Dark Mode construído com HTML5 e CSS3 puro.",
        github: "https://github.com/kaiooalvess/kaio-alves-portfolio",
        demo: "https://kaiooalvess.github.io/kaio-alves-portfolio/"
    },
    {
        id: 3,
        titulo: "Lista de Tarefas",
        imagem: "img/lista.png",
        descricao: "Aplicação interativa para organização e acompanhamento de tarefas com título, status e descrição detalhada.",
        github: "https://github.com/kaiooalvess/Lista-de-Tarefas",
        demo: "https://kaiooalvess.github.io/Lista-de-Tarefas/"
    },
    {
        id: 4,
        titulo: "Music Player",
        imagem: "img/music.png",
        descricao: "Player de áudio dinâmico e responsivo projetado para reprodução de músicas e audição offline.",
        github: "https://github.com/kaiooalvess/music-Player",
        demo: "https://kaiooalvess.github.io/music-Player/"
    }
    , {
        id: 4,
        titulo: "Mercado livre",
        imagem: "img/mercado livre.png",
        descricao: "Réplica do Mercado Livre desenvolvida para fins educacionais, simulando uma plataforma de marketplace com catálogo de produtos, busca, carrinho e interface de compra.",
        github: "https://github.com/kaiooalvess/E-commerce-Marketplace-R-plica-do-Mercado-Livre",
        demo: "https://kaiooalvess.github.io/E-commerce-Marketplace-R-plica-do-Mercado-Livre/"
    }
    , {
        id: 4,
        titulo: "Cartaz de Progura-se",
        imagem: "img/progura-se.png",
        descricao: "Cartaz informativo criado para divulgar a procura por uma pessoa, animal ou objeto, reunindo informações importantes para facilitar a identificação e o contato.",
        github: "https://github.com/kaiooalvess/Cartaz-de-Procura-se",
        demo: "https://kaiooalvess.github.io/Cartaz-de-Procura-se/"
    },
    {
        id: 4,
        titulo: "Link-Bio",
        imagem: "img/link-bio.png",
        descricao: "Página personalizada para reunir meus principais links de contato e redes sociais em um só lugar, facilitando o acesso às minhas informações e formas de contato.",
        github: "https://github.com/kaiooalvess/Link-Bio",
        demo: "https://kaiooalvess.github.io/Link-Bio/"
    },
    {
        id: 4,
        titulo: "Calculadora",
        imagem: "img/calculadora.png",
        descricao: "Software básico para realizar cálculos matemáticos de forma rápida e fácil, permitindo operações como adição, subtração, multiplicação e divisão.",
        github: "https://github.com/kaiooalvess/Calculadora-Simples",
        demo: "https://kaiooalvess.github.io/Calculadora-Simples/"
    }
    ,
    {
        id: 4,
        titulo: "Catalogo De Materiais",
        imagem: "img/catalogo.png",
        descricao: "Sistema para visualizar e organizar materiais elétricos, com informações como nome, marca, preço, descrição e imagem dos produtos, facilitando a consulta e localização dos itens.",
        github: "https://github.com/kaiooalvess/catalogo-materiais-eletricos",
        demo: "https://kaiooalvess.github.io/catalogo-materiais-eletricos/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalConteudo = document.querySelector('.modal .conteudo');
    const fechar = document.querySelector('.modal .fechar');
    const modalTitulo = document.querySelector('.modal h2');
    const modalTexto = document.querySelector('.modal p');
    const cards = document.querySelectorAll('.card');

    // 1. Preenche os dados e imagens diretamente nos Cards da tela principal
    cards.forEach((card, index) => {
        const projeto = meusProjetos[index];
        if (!projeto) return;

        // Atualiza Título do Card
        const tituloCard = card.querySelector('h3');
        if (tituloCard) tituloCard.textContent = projeto.titulo;

        // Atualiza Descrição do Card
        const textoCard = card.querySelector('p');
        if (textoCard) textoCard.textContent = projeto.descricao;

        // Atualiza/Cria Imagem do Card
        const containerImg = card.querySelector('.imagem');
        if (containerImg) {
            let imgCard = containerImg.querySelector('img');
            if (!imgCard) {
                imgCard = document.createElement('img');
                containerImg.appendChild(imgCard);
            }
            imgCard.src = projeto.imagem;
            imgCard.alt = projeto.titulo;
        }
    });

    // 2. Prepara os containers da foto e botões dentro da Modal
    let modalFotoContainer = document.querySelector('.modal .foto');
    if (!modalFotoContainer && modalConteudo) {
        modalFotoContainer = document.createElement('div');
        modalFotoContainer.className = 'foto';
        const novaImg = document.createElement('img');
        modalFotoContainer.appendChild(novaImg);
        modalConteudo.insertBefore(modalFotoContainer, modalConteudo.firstChild);
    }

    let acoesModal = document.querySelector('.modal-acoes');
    if (modalConteudo && !acoesModal) {
        acoesModal = document.createElement('div');
        acoesModal.className = 'modal-acoes';
        modalConteudo.appendChild(acoesModal);
    }

    // 3. Função para abrir a Modal preenchida com o projeto correto
    function abrirModal(index) {
        const projeto = meusProjetos[index] || meusProjetos[0];

        const imgElement = document.querySelector('.modal .foto img');
        if (imgElement) {
            imgElement.src = projeto.imagem;
            imgElement.alt = projeto.titulo;
        }

        if (modalTitulo) modalTitulo.textContent = projeto.titulo;
        if (modalTexto) modalTexto.textContent = projeto.descricao;

        if (acoesModal) {
            acoesModal.innerHTML = `
                <a href="${projeto.demo}" target="_blank" rel="noopener noreferrer" class="btn-modal-link btn-demo">
                    <i class="ph ph-desktop"></i> Ver Landing Page
                </a>
                <a href="${projeto.github}" target="_blank" rel="noopener noreferrer" class="btn-modal-link btn-github">
                    <i class="ph ph-github-logo"></i> Código no GitHub
                </a>
            `;
        }

        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // 4. Função para fechar a Modal
    function fecharModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // 5. Adiciona evento de clique em todos os botões dos cards
    cards.forEach((card, index) => {
        const btn = card.querySelector('.btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                abrirModal(index);
            });
        }
    });

    // 6. Fechamento do Modal via botão X ou clique fora
    if (fechar) {
        fechar.addEventListener('click', fecharModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });
});