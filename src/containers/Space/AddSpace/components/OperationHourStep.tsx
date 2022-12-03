import { Button, Checkbox, Col, Divider, Form, Row, Select } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { FC, useState } from "react";
import { getDayInWeek, getHourInDay } from "utils/common";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
}

const { Option } = Select

export const OperationHourStep: FC<Props> = ({data, onSuccess }) => {

    const [selected, setSelected] = useState(data.checked);
    const [title, setTitle] = useState('Different');

    const onChange = (e: CheckboxChangeEvent) => {
        if(e.target.checked  !== selected) {
            setSelected(!selected)
            setTitle(e.target.checked === false ? 'Different' : 'Same Hours')
        }
        
      };

    const hourInDay = getHourInDay()
    const dayInWeek = getDayInWeek()

    return (
        <div>
            <h2>What time and days are you open?</h2>
            <h4>Let people know what times your space is available</h4>
            <Divider />

            <Form name='overview-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
                <Form.Item
                    name='checked'
                    valuePropName="checked"            
                >
                    <Checkbox style={{marginBottom: '20px'}} onChange={onChange} defaultChecked={data.checked}>{title}</Checkbox>
                </Form.Item>
                
                
                {selected === true ?
                    dayInWeek.map((day) => (
                        <Row gutter={24} key={day.key}>
                            <Col span={24} key={day.key + 1} className="day-week"><h3>{day.value}</h3></Col>
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
                
                :   <Row gutter={24}>
                        <Col span={24} className="day-week"><h3>Same hours Monday - Sunday</h3></Col>
                        <Col span={12} >
                                <Form.Item
                                name='weekStart'
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
                            <Col span={12} >
                                <Form.Item
                                name='weekEnd'
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
                    </Row>}
                    
                    
                    
  
                    <Col span={24}>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' style={{ width: '10%', backgroundColor:'#08966b' }}>
                                NEXT
                            </Button>
                        </Form.Item>
                    </Col>  
                
            </Form>

        </div>
    );

}