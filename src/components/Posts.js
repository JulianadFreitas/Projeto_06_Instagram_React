import Post from "./Post";
export default function Posts() {
  const dadosPostagens = [
    {
      nome: "google",
      nomeImagemTop: "../imagens/google.png",
      nomeImagemPost: "../imagens/google.jpg",
      curtidoPor: "respondeai",
    },
    {
      nome: "google",
      nomeImagemTop: "../imagens/cabeca.JPG",
      nomeImagemPost: "../imagens/women.JPG",
      curtidoPor: "respondeai",
    },
  ];
  return (
    <div class="posts">
      <Post dadosPostagens={dadosPostagens} />
    </div>
  );
}
