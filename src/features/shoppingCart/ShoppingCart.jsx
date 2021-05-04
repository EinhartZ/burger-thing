import { Divider } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { CartItem } from '../../components/CartItem/CartItem';
import { selectShoppingCart, changeQuantity } from './shoppingCartSlice'

export const ShoppingCart = () => {
    const shoppingCart = useSelector(selectShoppingCart);
    const dispath = useDispatch();

    const cartElements = [];
    
    for(let item in shoppingCart) {
        cartElements.push({name: item, ...shoppingCart[item]});
    }

    // console.log(shoppingCart);
    // console.log(cartElements);

    return (
        <>
        <Divider>Shopping Cart</Divider>
            {cartElements.map(
                item => (
                <div key = {item.id}>
                <CartItem item = {item} onChange = {changeItemQuantity(item.name)}/>
                </div>
                )
            )}
        </>
    );

    function changeItemQuantity(name) {
        return (quantity) => {
            dispath(changeQuantity({name, quantity}))
        }
     }
}
