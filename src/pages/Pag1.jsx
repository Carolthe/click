import { useNavigate } from 'react-router-dom';
import Input from '../components/Input'
import Button from '../components/Button';
import { useForm } from 'react-hook-form';


export default function Pag1(props) {


  const navigate = useNavigate()
  const navigateToAbout = () => {
    navigate('/pag2')
  }
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nomePessoa: "",
      numeroInicial: "",
      numeroLimite: ""
    }
  })

  function sucesso(dados, onSubmit) {
    onSubmit.preventDefault()
   
    
    fetch("http://localhost:3000/dados", {
      method: "Post",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" 
      }
    })
    .then(resposta => resposta.json())
    .then(data=>{ 
      if(data.mensagem === "Sucesso!"){
        navigateToAbout()
      }else{
        alert("erro")
      }
    })
    .catch(()=> alert("erro"))
  
  }


  return (

    <form className='grid justify-center  items-center '
      onSubmit={handleSubmit(sucesso, console.log)}>
      <h1 className='w-[300px] mt-[100px] mb-[40px] text-[25px] font-semibold text-black '> Escolha um número e click até chegar ao limite</h1>
      <Input text="Digite o seu nome..."
        type="text"
        control={control}
        name="nomePessoa"
        required
      />
      <Input text="Digite um número..."
        type="number"
        control={control}
        name="numeroInicial" />
      <Input text="Valor Limite..."
        type="number"
        control={control}
        name="numeroLimite" />
      <Button className="bg-green-600 w-[350px] text-[23px] text-white mt-[30px] h-[60px]"
        text="Iniciar"
        onClick={() => { }} />
    </form>
  )
}