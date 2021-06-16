export default function Storie({ usuarios }) {
  return (
    <>
      {usuarios.map((usuario) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={usuario.img} alt="" />
            </div>
            <div class="usuario">{usuario.nome}</div>
          </div>
        );
      })}
    </>
  );
}
