var cliente = JSON.parse(localStorage.getItem('Cliente'));
console.log(cliente);
let produtos = JSON.parse(localStorage.getItem('Produtos'));
console.log(produtos);

// Adiciona um evento de clique ao botão para chamar a função gerarPDF
document.getElementById('btnGerarPDF').addEventListener('click', gerarPDF);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nome').textContent = "Nome: " + cliente.nome;
    document.getElementById('dataNascimento').textContent  = "Data de nascimento: " + cliente.dataNascimento;
    document.getElementById('cpf_cnpj').textContent = "Cpf/Cnpj: " +cliente.cpf_cnpj;
    document.getElementById('endereco').textContent = "Endereço: "+cliente.endereco;
    document.getElementById('numeroCasa').textContent = "N°: "+cliente.numeroCasa;
    document.getElementById('bairro').textContent = "Bairro: "+cliente.bairro;
    document.getElementById('cep').textContent = "Cep: "+cliente.cep;
    document.getElementById('cidade').textContent = "Cidade: "+cliente.cidade;
    document.getElementById('estado').textContent = "Estado: "+cliente.estado;
    document.getElementById('telefoneResidencial').textContent = "Telefone Residencial: "+cliente.telefoneResidencial;
    document.getElementById('telefonePessoal').textContent = "Telefone Pessoal"+cliente.telefonePessoal;
    document.getElementById('proximidade').textContent = "Proximidade: "+cliente.proximidade;
    document.getElementById('vendedor').textContent = "Vendedor: "+cliente.vendedor;
    document.getElementById('numeroPedido').textContent = "Numero do Pedido: "+cliente.numeroPedido;
    document.getElementById('observacao').textContent = "Observações: "+cliente.observacao;
    document.getElementById('email').textContent = "Email:"+cliente.email;
});

document.addEventListener("DOMContentLoaded", function(){
    let tbody = document.getElementById('tbody');
    produtos.forEach(x => {
        let linha = tbody.insertRow();
        linha.insertCell().textContent = x.localInstalacao; 
        linha.insertCell().textContent = x.unidades; 
        linha.insertCell().textContent = x.largura; 
        linha.insertCell().textContent = x.altura; 
        linha.insertCell().textContent = x.metrosQuadrado; 
        linha.insertCell().textContent = x.alturaComando; 
        linha.insertCell().textContent = x.modeloCorNumero; 
        linha.insertCell().textContent = x.comando; 
        linha.insertCell().textContent = x.bando; 
        linha.insertCell().textContent = x.colocacao; 
        linha.insertCell().textContent = x.preco; 
    });
})

// Função para gerar PDF
function gerarPDF() {
    // Cria um novo objeto jsPDF
    var doc = new jsPDF();

    // Adiciona o conteúdo da página ao PDF
    doc.html(document.body, {
        callback: function () {
            // Salva o PDF
            doc.save('pagina.pdf');
        }
    });
}





