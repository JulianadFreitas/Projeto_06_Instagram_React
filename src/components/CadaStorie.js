export default function CadaStorie(props) {
    return (
        <div class="story"> 
          <div class="imagem">
            <img src= {`../img/${props.nome}.svg`} alt =""/>
          </div>
          <div class="usuario">{props.nome}</div>
        </div>   
    )
}