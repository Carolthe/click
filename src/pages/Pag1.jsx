import { useNavigate } from 'react-router-dom';
import Input from '../components/Input'
import Button from '../components/Button';

export default function Pag1 (){
    const navigate = useNavigate()

             const navigateToAbout = () => {
                navigate('/pag2')
              }
             
              return (
                
                <div className='grid justify-center  items-center '>
                    <h1 className='w-[300px] mt-[100px] mb-[40px] text-[25px] font-semibold text-black '> Escolha um número e click até chegar ao limite</h1>
                    <Input text="Digite o seu nome..." />
                    <Input text="Digite um número..." />
                    <Input text="Valor Limite..." />
                    <Button className="bg-green-600 w-[350px] text-[23px] text-white mt-[30px] h-[60px]" text="Iniciar" onClick={navigateToAbout} />
                </div>
    )
}