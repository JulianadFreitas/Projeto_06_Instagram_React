export default function Storie({ usuarios }) {
  return (
    <>
      {usuarios.map((nome) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={`../img/${nome}.svg`} alt="" />
            </div>
            <div class="usuario">{nome}</div>
          </div>
        );
      })}
    </>
  );
}
