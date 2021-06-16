import Storie from "./Storie";
export default function Stories() {
  const usuarios = [
    { img: "../imagens/instagram.png", nome: "instagram" },
    { img: "../imagens/aple.jpg", nome: "apple" },
    { img: "../imagens/ibm.svg", nome: "ibm" },
    { img: "../imagens/facebook.png", nome: "facebook" },
    { img: "../imagens/microsof.jpg", nome: "microsoft" },
    { img: "../imagens/nasa.jpg", nome: "nasa" },
    { img: "../imagens/amazon.jpeg", nome: "amazon" },
    { img: "../imagens/artemis.jpg", nome: "artemis" },
  ];

  return (
    <div class="stories">
      <Storie usuarios={usuarios} />
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
