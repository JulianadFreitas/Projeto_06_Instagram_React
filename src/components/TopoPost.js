export default function TopoPost(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={props.imagemTop} alt="" />
        {props.nome}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
