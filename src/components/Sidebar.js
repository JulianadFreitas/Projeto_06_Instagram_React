import Sugestoes from "./Sugestoes";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Usuario nome="Catana" nomePerfil="catanacomics" />
      <Opcoes />
      <div className="sugestoes">
        <Sugestoes />
      </div>
      <Div
        className="links"
        conteudo="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
      />
      <Div className="copyright" conteudo="© 2021 INSTAGRAM DO FACEBOOK" />
    </div>
  );
}

function Usuario(props) {
  return (
    <div className="usuario">
      <img src={`../img/${props.nomePerfil}.svg`} />
      <div className="texto">
        <strong>{props.nomePerfil}</strong>
        {props.nome}
      </div>
    </div>
  );
}

function Opcoes() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
    </div>
  );
}
function Div(props) {
  return <div className={props.classe}>{props.conteudo}</div>;
}
