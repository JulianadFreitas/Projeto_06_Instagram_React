export default function CadaStorie(props) {
    return (
        <div> 
          <div class="imagem">
            <img src= {`../img/${props.nome}.svg`} alt =""/>
          </div>
          <div class="usuario">{props.nome}</div>
        </div>   
    )
}