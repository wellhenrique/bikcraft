const links = document.querySelectorAll(".header-menu a");

const ativarLink = (item) => {
  const url = location.href;
  const href = item.href;

  if (url.includes(href)) {
    item.classList.add("ativo");
  }
};

links.forEach(ativarLink);

// Ativar Itens Orçamento

const activeOrcamento = (item) => {
  const elemento = document.getElementById(item);
  if (elemento) {
    elemento.checked = true;
  }
};

const paramentros = new URLSearchParams(location.search);
paramentros.forEach(activeOrcamento);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

const ativarPergunta = (event) => {
  const ariaControl = event.target.attributes[2].value;
  const questao = event.currentTarget;
  const elemento = document.getElementById(ariaControl);
  elemento.classList.toggle("ativa");
  const ativa = elemento.classList.contains("ativa");
  questao.setAttribute("aria-expanded", ativa ? "true" : "false");
};

const ativarPerguntas = (elemento) => {
  elemento.addEventListener("click", ativarPergunta);
};

perguntas.forEach(ativarPerguntas);
