
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

function TopoPost(props) {
    return (
        <div class="topo">
              <div class="usuario">
              <img src= {`../img/${props.nome}.svg`}alt ="" />
              {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
        </div>
    )

}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src= {props.imagemPost} alt ="" />
        </div>
    )

}

function Curtidas(props) {
    return (
        <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>
             <div class="curtidas">
               <img src= {`../img/${props.curtidoPor}.svg`} alt ="" />
             <div class="texto">
                  Curtido por <strong>{props.curtidoPor}</strong> e <strong> outras 101.523 pessoas</strong>
                </div>
              </div>
             </div>
    )

}


