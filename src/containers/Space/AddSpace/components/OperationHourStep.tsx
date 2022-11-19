import { Button, Checkbox, Col, Divider, Form, Row } from "antd";
import { AMENITY } from "interfaces";
import { FC} from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
}



export const OperationHourStep: FC<Props> = ({data, onSuccess }) => {

    const amenity = AMENITY

    return (
        <div>
            <h2>What time and days are you open?</h2>
            <h4>Let people know what times your space is available</h4>
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

                
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
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