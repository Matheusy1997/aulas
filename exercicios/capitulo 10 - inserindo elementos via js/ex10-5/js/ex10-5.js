const frm = document.querySelector('form');
const dvNome = document.querySelector('#divNome');

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const resp = document.querySelectorAll('h3')
    if(resp != null){
        resp.forEach(r => r.remove())
    }
    const nomePartes = frm.inNome.value.split(' ');

    for(let i = 0; i < nomePartes.length; i++) {
        const h3 = document.createElement('h3');
        const numero = Math.ceil(Math.random() * 3);
        h3.textContent = nomePartes[i];
        h3.className = `parte${numero}`;
        dvNome.appendChild(h3);
    }

})