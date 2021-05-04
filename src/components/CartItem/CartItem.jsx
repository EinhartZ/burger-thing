import { InputNumber, Button, Space, Form, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const layout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 0 },
    // float: 'right',
};

export const CartItem = (props) => {
    const {item, onChange} = props;
    return (
        <>
        <Form {...layout}>
        <Form.Item label={`${item.id}. ${item.name}`}>
            <Space>
            <InputNumber min={1} value={item.quantity} onChange={onChange} />
            <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => onChange(0)}
            />
            </Space>
        </Form.Item>

        </Form>


        </>
    );
}