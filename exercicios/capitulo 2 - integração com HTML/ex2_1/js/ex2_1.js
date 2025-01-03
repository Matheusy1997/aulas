/* Cria referência ao form e ao elemento h3 (onde será exibida a resposta).*/
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

/*Cria um "ouvinte" de evento, acionado quando o botão sbmit for clicado */

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; //obtém o nome digitado no form
  resp.innerText = `Olá ${nome}`; //exibe a resposta do program
  e.preventDefault(); // evita envio do form
});

console.log(frm);

