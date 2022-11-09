import { ButtonStyle } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    type:"button" | "submit" | "reset" | undefined;
}

const Button = ({children,type}:ButtonProps) => {
    return (
        <ButtonStyle type={type}>{children}</ButtonStyle>
    )   
}
export default Button;