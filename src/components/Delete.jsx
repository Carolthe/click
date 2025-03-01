import Button from "../components/Button"

export default function Delete (){
    return(
        <div className="flex justify-center items-center">
        <div className=" text-center pt-[50px] rounded-[5px] items-center border-[1px] border-black w-[350px] h-[280px]">
            <p className="text-[22px] font-semibold">Tem certeza que deseja deletar?</p>
            <Button className="bg-red-700 text-white w-[250px] h-[50px] mt-[15px]" text="Deletar" />
            <Button className="border-black border-[1px] w-[250px] h-[50px] mt-[15px]" text="Cancelar" />
        </div>
        </div>
    )
}