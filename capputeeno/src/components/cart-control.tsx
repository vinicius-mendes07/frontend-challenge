import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import Router from "next/router";
import styled from "styled-components";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: #fff;

    margin-left: -10px;
`

const Container = styled.button`
    position: relative;
    border: none;
    background: transparent;
    cursor: pointer;
`

export function CartControl() {
    const {value} = useLocalStorage('cart-items', [])
    const router = useRouter()
    const handleNavigateToCart = ()=> {
        router.push('/cart')
    }
    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}