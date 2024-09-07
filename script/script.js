//console.log(dados[1].descricao);

let section = document.getElementById("resultados-pesquisa");

console.log(section);

section.innerHTML = `
         <div class="item-resultado">
            <img
              src="${dados[0].imagem}"
              alt="Imagem da notícia"
            />
            <div>
              <h2>
                ${dados[0].titulo}
              </h2>
              <p class="descricao-meta">
                ${dados[0].descricao}
              </p>
              <a
                href="${dados[0].link}"
                target="_blank"
                >Leia Mais</a
              ></div>
         </div>`;
