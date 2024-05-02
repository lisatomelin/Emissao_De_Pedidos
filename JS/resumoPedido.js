var cliente = JSON.parse(localStorage.getItem('Cliente'));
console.log(cliente);
let produtos = JSON.parse(localStorage.getItem('Produtos'));
console.log(produtos);

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
    let linha = tbody.insertRow();
    linha.insertCell().textContent = produtos.localInstalacao;
})

// localInstalacao: document.getElementById('localInstalacao').value,
// unidades: document.getElementById('unidades').value,
// largura: document.getElementById('largura').value,
// altura: document.getElementById('altura').value,
// metrosQuadrado: document.getElementById('metrosQuadrado').value,
// alturaComando: document.getElementById('alturaComando').value,
// modeloCorNumero: document.getElementById('modeloCorNumero').value,
// comando: iterarElemento(document.getElementsByName('comando')),
// bando: iterarElemento(document.getElementsByName('opcaoBando')),
// colocacao: iterarElemento(document.getElementsByName('opcaoFixacao')),
// precoUnitario: document.getElementById('precoUnitario').value,

