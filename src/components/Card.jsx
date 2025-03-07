import { useEffect } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function Card (){

    const [dadosCard, setDadosCard] = useState ("")

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
            <p>Nome:{dadosCard}</p>
            <p>Número Inicial:</p>
            <p>Número Limite:</p>  
        <div className="flex justify-end mt-[120px]">
        <button ><FaTrashCan /></button> 
        </div>
        </div>
        </div>
    )
}