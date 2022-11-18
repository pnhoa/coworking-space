import { Button, Form, Input } from "antd";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

export const DescriptionStep: FC<Props> = ({data, onSuccess }) => {

    return (
        <div>
            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                <Form.Item
                    name='openingDate'
                    label='Opening Date'
                    rules={[
                        {
                        required: true,
                        message: 'Opening Date!',
                        whitespace: true,
                        },
                    ]}
                    >
                <Input />
                </Form.Item>

                <Form.Item
                    name='shortDescription'
                    label='Short Description'
                    rules={[
                        {
                        required: true,
                        message: 'Please input Short Description!',
                        whitespace: true,
                        },
                    ]}
                    >
                <Input />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ width: '10%', backgroundColor:'#08966b' }}>
                        NEXT
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}