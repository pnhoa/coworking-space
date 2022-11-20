import { Button, Col, Divider, Form, Row, Select } from "antd";
import { FC} from "react";
import { getDayInWeek, getHourInDay } from "utils/common";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
}

const { Option } = Select

export const OperationHourStep: FC<Props> = ({data, onSuccess }) => {

    const hourInDay = getHourInDay()
    const dayInWeek = getDayInWeek()

    return (
        <div>
            <h2>What time and days are you open?</h2>
            <h4>Let people know what times your space is available</h4>
            <Divider />

            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                
                <Row gutter={24}>
                    
                    {
                        dayInWeek.map((day) => (
                            <Row gutter={48} key={day.key}>
                                <Col span={24} key={day.key + 1}><h3>{day.value}</h3></Col>
                                <Col span={12} key={day.key + 2}>
                                    <Form.Item
                                    name={day.key + 'Start'}
                                    label='From'
                                    rules={[{ required: true, message: 'Please input start time!' }]}
                                    >
                                    <Select placeholder='select start time'>
                                    {hourInDay?.map((item) => (
                                    <Option key={item.key} value={item.key}>
                                        {item.value}
                                    </Option>
                                    ))}
                                    </Select>
                                    
                                    </Form.Item>
                                </Col>
                                <Col span={12} key={day.key + 3}>
                                    <Form.Item
                                    name={day.key + 'End'}
                                    label='To'
                                    rules={[{ required: true, message: 'Please input end time!' }]}
                                    >
                                    <Select placeholder='select end time'>
                                    {hourInDay?.map((item) => (
                                    <Option key={item.key} value={item.key}>
                                        {item.value}
                                    </Option>
                                    ))}
                                    </Select>
                                    
                                    </Form.Item>
                                </Col>
                                </Row>
                            
                        ))
                    }
                    
  
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