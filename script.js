// Este script pode ser usado para adicionar funcionalidades extras, como abrir links ou interações com o usuário

// Exemplo de função para mostrar uma mensagem de boas-vindas ao usuário ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao Guia de Segurança no Discord! Proteja sua conta e fique sempre atento a golpes.");
};

// Função para direcionar o usuário a uma página de ajuda do Discord
function redirectToDiscordHelp() {
    window.open('https://support.discord.com/hc/pt-br', '_blank');
}

// Adicionando a funcionalidade de redirecionamento via links
document.querySelectorAll('.tip a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        window.open(url, '_blank');
    });
});
