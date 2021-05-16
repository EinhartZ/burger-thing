import { Divider, Space, Form, InputNumber, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
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

    const formLayout = {
        labelCol: { span: 16 },
        wrapperCol: { span: 8 },
    };

    return (
        <>
        <Divider>Shopping Cart</Divider>
        <Form {...formLayout}>
            {cartElements.map(
                item => (
                <Form.Item key={item.id} label={`${item.id}. ${item.name} ${item.price}`}>
                    <Space>
                    <InputNumber min={1} value={item.quantity} onChange={changeItemQuantity(item.name)} />
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => changeItemQuantity(item.name)(0)}
                    />
                    </Space>
                </Form.Item>
                )
            )}
        </Form>
        </>
    );

    function changeItemQuantity(name) {
        return (quantity) => {
            dispath(changeQuantity({name, quantity}))
        }
     }
}
