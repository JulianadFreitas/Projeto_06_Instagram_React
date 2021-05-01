import Sugestao from "./Sugestao";
export default function Sidebar() {

return (
<div class="sidebar">
          <Usuario nome ="Catana"nomePerfil = "catanacomics" />
          <Opcoes/>
          <div class="sugestoes">
          <Sugestao/>
          </div>
          <Div classe = "links" conteudo="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"/>
          <Div classe = "copyright" conteudo="© 2021 INSTAGRAM DO FACEBOOK"/>
          </div>
        
       )
      }

function Usuario(props) {

    return (
          <div class="usuario">
            <img src={`../img/${props.nomePerfil}.svg`} />
            <div class="texto">
              <strong>{props.nomePerfil}</strong>
              {props.nome}
            </div>
          </div>
          
    )
    }
    
    function Opcoes() {

      return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        </div>
      )
      } 
      function Div(props) {

        return (
          <div class={props.classe}> 
          {props.conteudo}
          </div>
        )}

     