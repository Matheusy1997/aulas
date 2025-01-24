const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
  let clube; // variavel que irá receber a nome do clube

  if (frm.rbBrasil.checked) {
    // se radiobutton rbBrasil estiver marcado
    clube = "Brasil";
  } else if (frm.rbPelotas.checked) {
    // se radiobutton rbPelotas estiver marcado
    clube = "Pelotas";
  } else {
    // se radiobutton Farroupilha estiver marcado
    clube = "Farroupilha";
  }

  //define as classes de dvTitulo: row e cores do clube
  dvTitulo.className = `row cores-${clube}`;

  //modifica a imagem de acordo com a seleção do cliente
  imClube.src = `img/${clube.toLowerCase()}.png`;
  imClube.className = "img-fluid"; // muda o estilo para exibir a imagem
  imClube.alt = `Simbolo do ${clube}`; //modifica o atributo alt da imagem

  localStorage.setItem("clube", clube);
};

//associa ao evento change de cada botão do form a função trocarClube
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    // verifica se clube foi armazenado no localStorage
    const clube = localStorage.getItem("clube"); // obtem o clube armazenado no localStorage

    if (clube == "Brasil") {
      frm.rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      frm.rbPelotas.checked = true;
    } else {
      frm.rbFarroupilha.checked = true;
    }
    trocarClube();
  }
};
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
