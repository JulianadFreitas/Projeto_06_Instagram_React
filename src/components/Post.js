import TopoPost from "./TopoPost";
import Conteudo from "./Conteudo";
import Curtidas from "./Curtidas";

export default function Post({ dadosPostagens }) {
  return (
    <>
      {dadosPostagens.map((itens) => {
        return (
          <div class="post">
            <TopoPost nome={itens.nome} />
            <Conteudo imagemPost={itens.NomeimagemPost} />
            <Curtidas curtidoPor={itens.curtidoPor} />
          </div>
        );
      })}
    </>
  );
}
