import { Drawer, Form, Row, Button, 
        Input, InputNumber } from 'antd';
import Dropzone from 'react-dropzone'
import FormItem from 'antd/lib/form/FormItem';


export const AdminDrawer = ({showDrawer, setShowDrawer, record, updateRecord}) => {

    const [form] = Form.useForm();
    const onClose = () => {
        setShowDrawer(false)
        form.resetFields()
    }

    const onConfirm = () => {
        const value = form.getFieldsValue();
        // Get an array of changed fields
        const arr = transform(form.getFieldsValue()).filter(x => form.isFieldTouched(x));
        // Get the final object with only changed keys
        const final = form.getFieldsValue(arr);
        updateRecord(final)
        onClose()
    }
    const transform = (obj, arr = [], parent = '') => {
        if (!obj) return [];
        if (parent) parent = `${parent}.`;
        Object.keys(obj).forEach(key => {
          const fullKey = `${parent}${key}`;
          if (obj[key] && typeof obj[key] === 'object') {
            transform(obj[key], arr, fullKey);
          } else {
            arr.push(fullKey);
          }
        });
        return arr;
      };

    return (

        <Drawer
        title="Edit"
        width={350}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={showDrawer}

        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button type="primary" onClick={onConfirm} style={{marginRight: 8}}>
                    Confirm
                </Button>
                <Button onClick={onClose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
        >
        <Form form={form}
            layout = "vertical"
            initialValues={{name: record.name, price: record.price}}
        >
            <Row>
                <Form.Item name="name" label="Name">
                    <Input disabled/>
                </Form.Item>
            </Row>
            <Row>
                <Form.Item name="price" label="Price">
                <InputNumber
                    min={0}
                    max={99}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
                </Form.Item>
            </Row>
            <Row>
                
            </Row>

            <Row>
                <FormItem>

                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    </section>
                )}
                </Dropzone>
                </FormItem>
            </Row>
        </Form>
      </Drawer>

    )
}