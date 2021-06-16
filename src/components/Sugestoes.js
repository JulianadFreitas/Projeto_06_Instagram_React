import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const usuariosSugeridos = [
    { nome: "bad.vibes.memes", razao: "Segue Você" },
    { nome: "chibirdart", razao: "Segue Você" },
    { nome: "razoesparaacreditar", razao: "Segue Você" },
    { nome: "adorable_animals", razao: "Novo no Instagram" },
    { nome: "smallcutecats", razao: "Segue Você" },
  ];

  return (
    <>
      {usuariosSugeridos.map((itens, i) => {
        return (
          <div class="sugestoes">
            <Sugestao nome={itens.nome} razao={itens.razao} />
          </div>
        );
      })}
    </>
  );
}
