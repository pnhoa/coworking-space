import { Button, Form, Input } from "antd";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

export const OverviewStep: FC<Props> = ({data, onSuccess }) => {
    
    return (
        <div>
            <Form name='overview-step' scrollToFirstError onFinish={onSuccess}  initialValues={data} >
                <Form.Item
                    name='name'
                    label='Name of Space'
                    rules={[
                        {
                        required: true,
                        message: 'Please input Name of Space!',
                        whitespace: true,
                        },
                    ]}
                    >
                <Input />
                </Form.Item>

                <Form.Item
                    name='price'
                    label='Average Price'
                    rules={[
                        {
                        required: true,
                        message: 'Please input Average Price!',
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