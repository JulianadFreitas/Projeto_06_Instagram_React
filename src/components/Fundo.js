
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

function Icones(props) {

return (
       <>
         <ion-icon name={props.tipo}></ion-icon>
       </>
)
}
