let clubes = [];

function adicionarClube() {
    const clube = document.getElementById('clube').value;
    if (clube) {
        clubes.push(clube);
        document.getElementById('clube').value = '';
        alert('Clube adicionado com sucesso!');
        listarClubes();
    } else {
        alert('Por favor, insira o nome do clube.');
    }
}

function listarClubes() {
    const lista = document.getElementById('listaClubes');
    lista.innerHTML = '';
    clubes.forEach(clube => {
        const li = document.createElement('li');
        li.textContent = clube;
        lista.appendChild(li);
    });
}

function montarTabela() {
    const tabela = document.getElementById('tabelaJogos');
    tabela.innerHTML = '';
    if (clubes.length % 2 === 0) {
        for (let i = 0; i < clubes.length / 2; i++) {
            const row = tabela.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = clubes[i];
            cell2.textContent = clubes[clubes.length - 1 - i];
        }
    } else {
        alert('O número de clubes deve ser par para montar a tabela.');
    }
}