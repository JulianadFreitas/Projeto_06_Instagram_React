export default function Storie() {
   
 const usuarios = ["9gag",
 "meowed",
 "barked",
 "nathanwpylestrangeplanet",
 "wawawicomics",
 "respondeai",
 "filomoderna",
 "memeriagourmet"
 ]
    return(
        <>
        { usuarios.map(nome => {
            return (<div class="story">
                         <div class="imagem">
                           <img src= {`../img/${nome}.svg`} alt =""/>
                         </div>
                       <div class="usuario">{nome}
                       </div>
                   </div>
                   );
        })}
      </>
    )
  }