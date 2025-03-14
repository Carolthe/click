import { FaTrashCan } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

export default function CardDados (props){

     const navigate = useNavigate();
    
        const navigatePag2 = (id) => {
           navigate(`/pag2?id=${id}`);
         };

    return(
        <div className="flex justify-center "   >
                <div className="w-[250px] bg-slate-100 font-semibold border-[1px] h-[250px] border-blue-400 p-[20px] overflow-auto">
                        <p>Nome:<span className="text-green-600"> {props.item.nomePessoa} </span></p>
                        <p>Número Inicial:<span className="text-green-600"> {props.item.numeroInicial}</span></p>
                        <p>Número Limite:<span className="text-green-600">{props.item.numeroLimite}</span> </p>
                <div className="flex justify-between pt-[90px]">
                <Button className="bg-blue-500 w-[130px] text-[14px] text-white h-[25px]" text="Alterar número" onClick={() => navigatePag2 (props.index) } />
                <button  ><FaTrashCan /></button> 
                </div>
            </div>
        </div>
    )
}