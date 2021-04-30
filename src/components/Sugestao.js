export default function Sugestao(props) {

    const usuariosSugeridos = [
    {nome:  "bad.vibes.memes", razao:"Segue Você"},
    {nome:  "chibirdart", razao:"Segue Você"},
    {nome:  "razoesparaacreditar", razao:"Segue Você"},
    {nome:  "adorable_animals", razao:"Novo seguidor"},
    {nome:  "smallcutecats", razao:"Segue Você"}
]


    return (  
        <>
        { usuariosSugeridos.map( itens => {
            return (
    <div class="sugestao">
      <div class="usuario">
        <img src= {`../img/${itens.nome}.svg`} alt ="" /> 
        <div class="texto">
          <div class="nome">{itens.nome}</div>
        <div class="razao">{itens.razao}</div>
      </div>
     </div>
     <div class="seguir">Seguir</div>
    </div>
   );
})}
</>
)
}
  