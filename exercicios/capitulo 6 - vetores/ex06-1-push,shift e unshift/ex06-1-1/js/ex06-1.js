const frm = document.querySelector("form")
const respnome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = frm.inPaciente.value
  pacientes.push(nome)
  let lista = ""
  
  for(let i = 0; i < pacientes.length; i++){
    lista += `${i + 1}. ${pacientes[i]}\n`
  }

  respLista.innerText = lista
  frm.inPaciente.value = ""
  frm.inPaciente.focus()
})

//Adiciona um "ouvinte" para o evento click no btUrgencia que está no for

frm.btnUrgencia.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, paciente is required)
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""

     // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente,i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btnAtender.addEventListener("click", () => {
      // se o tamanho do vetor = 0
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift() // remove do início da fila (e obtém nome)
    respnome.innerText = atender
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})