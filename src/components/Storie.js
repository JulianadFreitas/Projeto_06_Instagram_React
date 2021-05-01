import CadaStorie from "./CadaStorie";
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
            return (<>
                    <CadaStorie nome={nome}  />
                   </>
                   );
        })}
      </>
    )
  }

  

  