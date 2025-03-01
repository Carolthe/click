export default function Input (props){
    return(
        <div>
            <input className="w-[340px] h-[55px] mb-[10px] border-2 border-gray-300 rounded-[5px] pl-[10px]" placeholder={props.text} />
        </div>
    )
}