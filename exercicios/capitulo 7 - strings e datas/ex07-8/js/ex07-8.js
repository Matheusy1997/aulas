const frm = document.querySelector("form")

const TAXA_MULTA = 2 / 100 // multa por atraso
const TAXA_JUROS = 0.33 / 100 // juros por dia de atraso

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form

    const dataVenc = frm.inDataVenc.value;
    console.log(dataVenc)
    const valor = Number(frm.inValor.value);
    const hoje = new Date(); // cria variáveis (instancia objetos)
    const vencto = new Date() // do tipo Date()

    const partes = dataVenc.split("-") // data vem no formato aaaa-mm-dd
    console.log(partes)
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto  // calcula a diferença de dias entre datas (em ms)
    
    let multa = 0
    let juros = 0

    if(atraso > 0){ // se conta estiver em atraso ...
    // converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA //calcula multa e juros
        juros = valor * TAXA_JUROS * dias
    }
    const total = valor + multa + juros // calcula o total

    frm.inMulta.value = multa.toFixed(2)
    frm.inJuros.value = juros.toFixed(2)
    frm.inTotal.value = total.toFixed(2)
})