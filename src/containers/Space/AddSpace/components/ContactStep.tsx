import { Button, Col, Divider, Form, Input, Row } from "antd";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }


export const ContactStep: FC<Props> = ({data, onSuccess }) => {

    return (
        <div>
            <h2>How can we contact you?</h2>
            <Divider />
            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                <Row gutter={24}>
                    <Col span={24}>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[
                            {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                            },
                            {
                            required: true,
                            message: 'Please input your E-mail!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item
                        name='phone'
                        label='Phone'
                        rules={[
                            {
                              required: true,
                              message: 'Please input your phone number!',
                            },
                            {
                              len: 10,
                              message: 'Please input 10 number ',
                            },
                          ]}
                        >
                        <Input type='number'/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item
                        name='websiteUrl'
                        label='Website'
                        >
                        <Input placeholder="eg. https://5-y-coffee.business.site"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                    <h2>Social Network</h2>
                    </Col>   
                    <Col span={24}>
                    <Form.Item
                        name='facebookUrl'
                        label='Facebook'
                        >
                        <Input placeholder="eg. https://www.facebook.com/5YCOFFEE"/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item
                        name='instagramUrl'
                        label='Instagram'
                        >
                        <Input placeholder="eg. https://www.instagram.com/5YCOFFEE"/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' style={{ width: '10%', backgroundColor:'#08966b' }}>
                                NEXT
                            </Button>
                        </Form.Item>
                    </Col>  
                </Row>
            </Form>
        </div>
    );

}