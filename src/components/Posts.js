import Post from "./Post";
export default function Posts() {
  const dadosPostagens = [
    {
      nome: "meowed",
      NomeimagemPost: "../img/gato-telefone.svg",
      curtidoPor: "respondeai",
    },
    {
      nome: "barked",
      NomeimagemPost: "../img/dog.svg",
      curtidoPor: "respondeai",
    },
  ];
  return (
    <div class="posts">
      <Post dadosPostagens={dadosPostagens} />
    </div>
  );
}
