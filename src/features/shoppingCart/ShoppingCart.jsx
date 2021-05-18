import { Divider, Space, Form, InputNumber, Button} from 'antd';
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import { selectShoppingCart, changeQuantity } from './shoppingCartSlice'

export const ShoppingCart = () => {
    const shoppingCart = useSelector(selectShoppingCart);
    const dispath = useDispatch();

    const cartElements = [];
    
    for(let item in shoppingCart) {
        cartElements.push({name: item, ...shoppingCart[item]});
    }

    const cartTotal = cartElements.reduce((a, b) => a + b.price * b.quantity, 0)

    // console.log(shoppingCart);
    // console.log(cartElements);

    const formLayout = {
        labelCol: { span: 16 },
        wrapperCol: { span: 8 },
    };

    return (
        <>
        <Divider>Shopping Cart</Divider>
        <Form colon={false} {...formLayout}>
            {cartElements.map(
                item => (
                <Form.Item key={item.id} label={`${item.name}: ${item.price} $`}>
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
            <Form.Item label={`Total: ${cartTotal}$`}>
                <Space>
                <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={() =>confirmOrder()}
                    disabled = {cartTotal <= 0}
                >
                    BUY
                </Button>
                </Space>
            </Form.Item>
        </Form>
        </>
    );

    function confirmOrder() {
        console.info("Order Confirmed")
        console.dir(cartElements);
    }

    function changeItemQuantity(name) {
        return (quantity) => {
            dispath(changeQuantity({name, quantity}))
        }
     }
}
