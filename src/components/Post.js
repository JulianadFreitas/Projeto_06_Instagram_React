import TopoPost from "./TopoPost";
import Conteudo from "./Conteudo";
import Curtidas from "./Curtidas";

export default function Post() {
const DadosPostagens = [ 
{ nome:"meowed", NomeimagemPost:"../img/gato-telefone.svg", curtidoPor: "respondeai"},
{ nome:"barked", NomeimagemPost:"../img/dog.svg", curtidoPor: "respondeai"}
];

    return (  
        <>
        { DadosPostagens.map( itens => {
            return (
            <div class="post">
              <TopoPost nome = {itens.nome} />
              <Conteudo imagemPost={itens.NomeimagemPost}/>
              <Curtidas curtidoPor={itens.curtidoPor} />
            </div> 
            );
    })}
    </> 
)
}