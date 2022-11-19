import { Button, Col, DatePicker, Divider, Form, Input, Row } from "antd";
import moment from "moment";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

const { TextArea } = Input

export const DescriptionStep: FC<Props> = ({data, onSuccess }) => {

    return (
        <div>
            <h2>Accentuate your space to make people stand out</h2>
            <Divider />
            <Form name='description-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name='openingDate'
                            label='Opening Date'
                            rules={[
                                {
                                required: true,
                                message: 'Opening Date',
                                },
                            ]}
                            >
                        <DatePicker disabledDate={(current) => {
                                    let customDate = moment().format("YYYY-MM-DD");
                                        return current && current >= moment(customDate, "YYYY-MM-DD");
                                    }} 
                                    format="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>


                    <Col span={24}>
                        <Form.Item
                            name='shortDescription'
                            label='Short Description'
                            rules={[
                                {
                                required: true,
                                message: 'Please input Short Description!',
                                
                                whitespace: true,
                                },
                                { min: 50, message: 'Length must be minimum 50 characters.' },
                            ]}
                            >
                        <TextArea rows={3} placeholder='Enter short description ...' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name='description'
                            label='Description'
                            rules={[
                                {
                                required: true,
                                message: 'Please input description!',
                                
                                whitespace: true,
                                },
                                { min: 300, message: 'Username must be minimum 300 characters.' },
                            ]}
                            >
                        <TextArea rows={7} placeholder='Enter description ...' />
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