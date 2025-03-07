import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

export default function Card (){

    const navigate = useNavigate();

    const navigatePag2 = () => {
       navigate('/pag2');
     };

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
        <div className="flex flex-col justify-center">
        <div className="w-[250px] bg-slate-100 font-semibold border-[1px] h-[250px] border-blue-400 p-[20px] overflow-auto">
        {dadosCard.map((item, index) => (
            <div key={index}>
                <p>Nome:<span className="text-green-600"> {item.nomePessoa} </span></p>
                <p>Número Inicial:<span className="text-green-600"> {item.numeroInicial}</span></p>
                <p>Número Limite:<span className="text-green-600">{item.numeroLimite}</span> </p>
            </div>
        ))}
        <div className="flex justify-end pt-[90px]">
        <button  ><FaTrashCan /></button> 
        </div>
        </div>
        <Button className="bg-blue-500 w-[300px] text-[23px] text-white mt-[30px] h-[60px]" text="Incrementar valor" onClick={navigatePag2} />
        </div>
    )
}