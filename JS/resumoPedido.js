var cliente = JSON.parse(localStorage.getItem('Cliente'));
console.log(cliente);
let produtos = JSON.parse(localStorage.getItem('Produtos'));
console.log(produtos);

// Adiciona um evento de clique ao botão para chamar a função gerarPDF
document.getElementById('btnGerarPDF').addEventListener('click', () => {
    //CONTEÚDO DO PDF
    const body = document.querySelector('body');

    //CONFIGURAÇÃO DO ARQUIVO FINAL DO PDF
    const options = {
        margin : [10,10,10,10],
        filename: `${cliente.nome}_${cliente.cpf_cnpj}.pdf`,
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    //GERAR E BAIXAR PDF
    html2pdf().set(options).from(body).save();
    localStorage.removeItem('Produtos');
    localStorage.removeItem('Cliente');
});

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
    document.getElementById('telefonePessoal').textContent = "Telefone Pessoal: "+cliente.telefonePessoal;
    document.getElementById('proximidade').textContent = "Proximidade: "+cliente.proximidade;
    document.getElementById('vendedor').textContent = "Vendedor: "+cliente.vendedor;
    document.getElementById('numeroPedido').textContent = "Numero do Pedido: "+cliente.numeroPedido;
    document.getElementById('observacao').textContent = "Observações: "+cliente.observacao;
    document.getElementById('email').textContent = "Email:"+cliente.email;
});

document.addEventListener("DOMContentLoaded", function(){
    let tbody = document.getElementById('tbody');
    let total = 0;
    produtos.forEach(x => {
        let linha = tbody.insertRow();
        total += x.preco;
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
    let linha = tbody.insertRow();
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = `R$ ${total}`; 
})






