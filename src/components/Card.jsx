import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function Card (){

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
        <div className="flex justify-center">
        <div className="w-[250px] bg-slate-100 font-semibold border-[1px] h-[250px] border-blue-400 p-[20px]">
        {dadosCard.map((item, index) => (
            <div key={index}>
                <p>Nome: {item.name}</p>
                <p>Número Inicial: {item.numeroInicial}</p>
                <p>Número Limite: {item.numeroLimite}</p>
            </div>
        ))}
        <div className="flex justify-end mt-[120px]">
        <button ><FaTrashCan /></button> 
        </div>
        </div>
        </div>
    )
}