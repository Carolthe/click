import { useController } from "react-hook-form"

export default function Input (props){

    const {field} = useController({
        control: props.control,
        name: props.name
    })

    return(

        <div>
            <input className="w-[340px] h-[55px] mb-[10px] border-2 border-gray-300 rounded-[5px] pl-[10px]" 
            placeholder={props.text} 
            type={props.type} 
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={field.ref}
            required={props.required}
          />
        </div>
    )
}