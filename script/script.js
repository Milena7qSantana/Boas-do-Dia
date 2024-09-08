//console.log(dados[1].descricao);

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhuma data encontrada!</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase().console.log(campoPesquisa);

  let resultados = "";
  let titulo = "";
  let descricao = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (
      dado.data.includes(campoPesquisa) ||
      dado.titulo.includes(campoPesquisa)
    ) {
      resultados += `
      <div class="item-resultado">
         <img
           src="${dado.imagem}"
           alt="Imagem da notícia"
         />
         <div>
           <h2>
             ${dado.titulo}
           </h2>
           <p class="descricao-meta">
             ${dado.descricao}
           </p>
           <a
             href="${dado.link}"
             target="_blank"
             >Leia Mais</a
           ></div>
      </div>`;
    }

    console.log(dado.data.includes(campoPesquisa));
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  section.innerHTML = resultados;
}
