import Icones from "./Icones";
export default function Fundo() {

let icons = ["home", "search-outline", "add-circle-outline","heart-outline","person-outline", ]
return (
    <>
    { icons.map( itens => {
        return (
                 <div class="fundo-mobile">
                   <Icones name={itens}/>
                 </div>);
    })}
    </>
)
}


