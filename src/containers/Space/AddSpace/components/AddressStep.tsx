import { Button, Col, Divider, Form, Input, Row } from "antd";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }


export const AddressStep: FC<Props> = ({data, onSuccess }) => {

    return (
        <div>
            <h2>Help we find your space</h2>
            <Divider />
            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            name='locationName'
                            label='Location Name'
                            rules={[
                                {
                                required: true,
                                message: 'Please input location name!',
                                whitespace: true,
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                    <Form.Item
                        name='addressLine1'
                        label='Address Line 1'
                        rules={[
                            {
                            required: true,
                            message: 'Please input address line!',
                            whitespace: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                    <Form.Item
                        name='addressLine2'
                        label='Address Line 2'
                        >
                        <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                    <Form.Item
                        name='floorNumber'
                        label='Floor Number'
                        >
                        <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name='subDistrict'
                        label='Sub District'
                        rules={[
                            {
                            required: true,
                            message: 'Please input sub district!',
                            whitespace: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name='district'
                        label='District'
                        rules={[
                            {
                            required: true,
                            message: 'Please input district!',
                            whitespace: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name='province'
                        label='Province'
                        rules={[
                            {
                            required: true,
                            message: 'Please input province!',
                            whitespace: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name='zipCode'
                        label='Zip Code'
                        >
                        <Input />
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