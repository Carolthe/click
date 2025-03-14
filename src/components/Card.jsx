import { useEffect, useState } from "react";
import CardDados from "./CardDados";

export default function Card (props){

   

    const [dadosCard, setDadosCard] = useState ([])

  useEffect( ()=>{
    fetch ("http://localhost:3000/dados", {
        method: "GET",
        headers:{
            "Content-type": "application/json",
        },
  })
  .then((resposta) => resposta.json())
  .then((data) => {
    setDadosCard(data)

  })
  .catch((err) => console.log(err))
},[])

    
    return(
       <div className="grid justify-center">
        <div className="flex flex-wrap mx-[127px]">
        {dadosCard.map((item, index) => (
        <div key={index}>
        <CardDados item={item} index={index} />
        </div>
        ))}
        </div>
        </div>
    )
}