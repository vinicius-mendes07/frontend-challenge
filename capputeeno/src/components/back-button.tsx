import { useRouter } from "next/navigation";
import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text);
`
interface BtnProps{
    navigate: string;
}
export function BackBtn({navigate}: BtnProps) {
    const router = useRouter()

    function handleClick(){
        router.push(navigate)
    }

    return (
        <Button onClick={handleClick}>
            <BackIcon />
            Voltar
        </Button>
    )
}