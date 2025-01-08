const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form

    const num = Number(frm.inNum.value);
    let temDivisor = 0;
    // let primos = "";

    for(let i = 2; i <= num / 2; i++){  // percorre todos os possíveis divisores de num
        if(num % i == 0){ // se tem um divisor
           temDivisor = 1;   // muda o flag
           break;        // sai da repetição
        }
        
        // if(!(i % 2 == 0) && !(i % 3 == 0) && !(i % 5 == 0)){
        //     primos = primos + i + ", ";
        // }             
    }
    if(num > 1 && !temDivisor){
        resp.innerText = `${num} é Primo`;
    }else{
        resp.innerText = `${num} não é Primo`;
    }
    console.log(temDivisor);
    //console.log(primos);
})