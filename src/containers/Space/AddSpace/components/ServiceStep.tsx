import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }


export const ServiceStep: FC<Props> = ({data, onSuccess }) => {

    return (
        <div>
            <h2>Tell me about your service?</h2>
            <Divider />
            <Form name='service-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
            
                
                <Form.List name="services">
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row gutter={24} key={key}>
                                
                                <Col span={12}>
                                    <Form.Item
                                    {...restField}
                                    label="Title"
                                    name={[name, 'title']}
                                    rules={[{ required: true, message: 'Missing title' }]}
                                    >
                                    <Input placeholder="Title" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                    {...restField}
                                    label="Note"
                                    name={[name, 'note']}
                                    >
                                    <Input placeholder="Note" />
                                    </Form.Item>
                                </Col>
                                <Col>
                                <Col span={24}>
                                    <h2>Package</h2>
                                </Col> 
                                
                                    <Form.List name={[name, 'packages']}>
                                        {(packages, { add, remove }) => (
                                        <>
                                            {packages.map(({ key, name, ...restField }) => (
                                                <Row gutter={24} key={key}>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        {...restField}
                                                        label="Type"
                                                        name={[name, 'type']}
                                                        rules={[{ required: true, message: 'Missing type' }]}
                                                        >
                                                        <Input placeholder="Type" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        {...restField}
                                                        label="Note"
                                                        name={[name, 'note']}
                                                        >
                                                        <Input placeholder="Note" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={4}>
                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Col>

                                                </Row>
                                            ))}
                                            <Col span={24}>
                                                <Form.Item>
                                                    <Button type="dashed" style={{ width: '10%' }} onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add new package
                                                    </Button>
                                                </Form.Item>
                                            </Col>
                                            
                                        </>
                                        )}
                                    </Form.List>
                                </Col>
                                <Col span={4}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>

                            </Row>
                        ))}
                        <Col span={24}>
                            <Form.Item>
                                <Button type="dashed" style={{ width: '10%' }} onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add new service
                                </Button>
                            </Form.Item>
                        </Col>
                        
                    </>
                    )}
                    </Form.List>
                <Row gutter={24}>    
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