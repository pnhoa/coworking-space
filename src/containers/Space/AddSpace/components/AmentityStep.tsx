import { Button, Checkbox, Col, Divider, Form, Row } from "antd";
import { AMENITY } from "interfaces";
import { FC } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
}

export const AmentityStep: FC<Props> = ({data, onSuccess }) => {

    const amenity = AMENITY

    return (
        <div>
            <h2>Tell customer about service in your space</h2>
            <Divider />

            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                
                <Row gutter={24}>
                    {amenity.map((item) => (
                        <Col span={8} key={item}>
                            <Form.Item
                        name={item}
                        label={item.toUpperCase()}
                        valuePropName="checked"
                        >
                            <Checkbox value={item}></Checkbox>
                        </Form.Item>
                        </Col>
                    ))}
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