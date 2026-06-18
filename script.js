// Seleciona os elementos do formulário e do feed de postagens
const blogForm = document.getElementById('blogForm');
const blogFeed = document.getElementById('blogFeed');

// Escuta o evento de envio (submit) do formulário
blogForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada

    // Captura os valores preenchidos nos campos de texto
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    
    // Gera a data atual no formato brasileiro
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = `Publicado em ${today.toLocaleDateString('pt-BR', options)}`;

    // Cria o novo elemento HTML para o artigo
    const newPost = document.createElement('article');
    newPost.classList.add('post');
    newPost.innerHTML = `
        <h2>${title}</h2>
        <div class="date">${formattedDate}</div>
        <p>${content}</p>
    `;

    // Insere o novo post no topo do feed do blog
    blogFeed.insertBefore(newPost, blogFeed.firstChild);

    // Reseta os campos do formulário para novas postagens
    blogForm.reset();
});
