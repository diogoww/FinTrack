// recuperar os dados de cadastro
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    
    const nome = params.get("nome");
    const data = params.get("data");
    let valor = params.get("valor");
    const descricao = params.get("descricao");
    
    if (valor) {
        valor = parseFloat(valor).toFixed(2).replace(".", ",");
    }
    
    const dadosDiv = document.getElementById("dados-despesa");
    dadosDiv.innerHTML = `
        <p><strong>Despesa: </strong> ${nome}</p>
        <p><strong>Data: </strong> ${data}</p>
        <p><strong>Valor: </strong> R$ ${valor}</p>
        <p><strong>Descrição: </strong> ${descricao}</p>
    `;
});