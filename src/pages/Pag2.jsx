import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

export default function Pag2 (){
   

    const [contador, setContador] = useState(0)

    function encremento(){
        
        if(contador < 50){
            setContador(contador + 1 )
        }else{
            alert("Não pode passar do 50")
        }
    }
    function resetar (){
        setContador(0)
    }
    
    const navigate = useNavigate();

    const navigatePag1 = () => {
       navigate('/pag1');
     };

    return(
        <div className="grid justify-items-center mt-[100px]">
            <p className="text-[27px] text-blue-500">Número escolhido: {contador}</p>
            <Button className="bg-green-500 active:bg-red-600 mt-[20px] text-white w-[380px] h-[60px]" onClick={encremento} text="Incrementar" />
            <Button className=" border-[1px] border-black mt-[20px] w-[380px] h-[60px] text-black" onClick={resetar} text="Resetar" />
            
            <div className="border-[1px] border-red-600 mt-[80px] h-[220px] justify-center flex-col flex p-[20px]">
            <p className="text-[20px] font-semibold text-red-600  ">Você Chegou ao limite </p>
            <p className="mb-[5px] text-[15px] w-[250px]">Para continuar, pressione o reset ou volte para o início</p>
            </div>
            <Button className="bg-blue-500 w-[300px] text-[23px] text-white mt-[30px] h-[60px]" text="Voltar" onClick={navigatePag1} />
        </div>
    )
}