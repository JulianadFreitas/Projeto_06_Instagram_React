export default function Curtidas(props) {
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