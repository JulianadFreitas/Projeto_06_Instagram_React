export default function Storie({ usuarios }) {
  return (
    <>
      {usuarios.map((usuario) => {
        return (
          <div className="story">
            <div className="imagem">
              <img src={usuario.img} alt="" />
            </div>
            <div className="usuario">{usuario.nome}</div>
          </div>
        );
      })}
    </>
  );
}
