function calculoImpostos(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNota() {
    console.log('Função gerarNota foi chamada!');

    let valorVenda = parseFloat(document.getElementById('valorVenda').value);
    let itensVendidos = document.getElementById('itensV').value; 
    let irpf = parseFloat(document.getElementById('irpf').value);
    let pis = parseFloat(document.getElementById('pis').value);
    let cofins = parseFloat(document.getElementById('cofins').value);
    let inss = parseFloat(document.getElementById('inss').value);
    let issqn = parseFloat(document.getElementById('issqn').value);


    let valorIRPF = calculoImpostos(valorVenda, irpf);
    let valorPIS = calculoImpostos(valorVenda, pis);
    let valorCOFINS = calculoImpostos(valorVenda, cofins);
    let valorINSS = calculoImpostos(valorVenda, inss);
    let valorISSQN = calculoImpostos(valorVenda, issqn);

   
    let totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    let valorLiquido = valorVenda - totalImpostos;

    // Exibir os resultados
    document.getElementById('nf-valorVenda').textContent = valorVenda.toFixed(2);
    document.getElementById('nf-itens').textContent = itensVendidos;
    document.getElementById('nf-irpf').textContent = valorIRPF.toFixed(2);
    document.getElementById('nf-pis').textContent = valorPIS.toFixed(2);
    document.getElementById('nf-cofins').textContent = valorCOFINS.toFixed(2);
    document.getElementById('nf-inss').textContent = valorINSS.toFixed(2);
    document.getElementById('nf-issqn').textContent = valorISSQN.toFixed(2);
    document.getElementById('nf-totalImpostos').textContent = totalImpostos.toFixed(2);
    document.getElementById('nf-valorLiquido').textContent = valorLiquido.toFixed(2);

    // Exibir a seção da nota fiscal
    document.getElementById('nota-fiscal').style.display = 'block'; // Corrigir o ID
}