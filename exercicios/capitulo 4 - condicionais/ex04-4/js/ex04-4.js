const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const horaBrasil = Number(frm.inHora.value);
    let fusoHorario = horaBrasil + 5;
    horarioFranca = fusoHorario > 24 ? fusoHorario - 24 : fusoHorario;
    
    //let horarioFranca = horaBrasil + 5;
    // if(horarioFranca > 24){
    //     horarioFranca = horarioFranca - 24;
    // } 
    resposta.innerText = `Hora na França: ${horarioFranca.toFixed(2)}`
});