import CadaSugestao from "./CadaSugestao";

export default function Sugestao() {

    const usuariosSugeridos = [
    {nome:  "bad.vibes.memes", razao:"Segue Você"},
    {nome:  "chibirdart", razao:"Segue Você"},
    {nome:  "razoesparaacreditar", razao:"Segue Você"},
    {nome:  "adorable_animals", razao:"Novo no Instagram"},
    {nome:  "smallcutecats", razao:"Segue Você"}
]

    return ( 
        <>   
        {usuariosSugeridos.map( itens => {
            return (
                <div class="sugestoes">
                   <CadaSugestao nome={itens.nome} razao={itens.razao} />    
                </div>
            );
        })}
       </>
)
}




  