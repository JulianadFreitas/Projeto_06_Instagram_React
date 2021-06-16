import TopoPost from "./TopoPost";
import Conteudo from "./Conteudo";
import Curtidas from "./Curtidas";

export default function Post({ dadosPostagens }) {
  return (
    <>
      {dadosPostagens.map((itens) => {
        return (
          <div className="post">
            <TopoPost nome={itens.nome} imagemTop={itens.nomeImagemTop}/>
            <Conteudo imagemPost={itens.nomeImagemPost} />
            <Curtidas curtidoPor={itens.curtidoPor} />
          </div>
        );
      })}
    </>
  );
}
