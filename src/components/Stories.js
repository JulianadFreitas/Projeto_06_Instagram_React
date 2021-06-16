import Storie from "./Storie";
export default function Stories() {
  const usuarios = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
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
