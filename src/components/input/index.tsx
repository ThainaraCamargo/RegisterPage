import { Input } from "./style";

interface InputProps {
    type?: string;
    placeholder:string;
    required: boolean;
}
const InputControl = ({type,placeholder,required}:InputProps) => {
    console.log(type)
    return (
        <Input type={type} placeholder={placeholder} required={required}>
        </Input>
    )
}

export default InputControl;