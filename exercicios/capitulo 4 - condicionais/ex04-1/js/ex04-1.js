const frm = document.querySelector("form")
const mediaNota = document.querySelector("h2")
const resultado = document.querySelector("h3")



frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNomeAluno.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    
    const media = (nota1 + nota2) / 2;
    mediaNota.innerText = `Media das Notas ${media.toFixed(2)}`;
    
    if (media >= 7) {
        resultado.innerText = `Parabéns ${nome} Você foi Aprovado(a)`;
        resultado.style.color = "blue";
    }else if(media >= 4){
        resultado.innerText = `Atenção ${nome} Vocé estã em exame`;
        resultado.style.color = "green";
    }else{
        resultado.innerText = `Infelizmente ${nome} Vocé foi Reprovado(a)`;
        resultado.style.color = "red";
    }
})
