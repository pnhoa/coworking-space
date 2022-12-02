import { AimOutlined, CaretRightOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, notification, Row, Select, Upload } from "antd";
import { FC } from "react";
import ServiceWrapper from './style';


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

  const { Option } = Select

export const ServiceStep: FC<Props> = ({data, onSuccess }) => {

      const handleChange = (e: any) => {
        return e.file.response;
      };

    return (
        <ServiceWrapper>
            <h2>Tell me about your service?</h2>
            <Divider />
            <Form name='service-step' scrollToFirstError onFinish={onSuccess} initialValues={data} >
            
  
                <Form.List name="serviceSpaceDTOs"
                    rules={[
                        {
                          validator: async (_, services) => {
                            if (!services || services.length < 1) {
                                notification.error({message:"At least 1 service"});
                              return Promise.reject(new Error('At least 1 service'));
                            }
                          },
                        },
                      ]}>
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row gutter={24} key={key}>
                                <Col span={24}>
                                    <h2 className="h2-service">Service #{key + 1}</h2>
                                </Col> 
                                <Col span={12} >
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

                                <Col span={24}>
                                    
                                    <h3 className="h3-package">Package</h3>
                                </Col> 

                                
                                <Form.List name={[name, 'packageDTOs']}
                                    rules={[
                                        {
                                        validator: async (_, packages) => {
                                            if (!packages || packages.length < 1) {
                                                notification.error({message:"At least 1 package"});
                                            return Promise.reject(new Error('At least 1 package'));
                                            }
                                        },
                                        },
                                    ]}>
                                    {(packages, { add, remove }) => (
                                    <>
                                        {packages.map(({ key, name, ...restField }) => (
                                            <Row gutter={24} key={key}>
                                                <Col span={24}>
                                                    <h4 className="h4-package"><CaretRightOutlined />Package #{key + 1}</h4>
                                                </Col> 
                                                <Col span={10} className="h4-package">
                                                    <Form.Item
                                                    {...restField}
                                                    label="Type"
                                                    name={[name, 'type']}
                                                    rules={[{ required: true, message: 'Missing type' }]}
                                                    >
                                                    <Select placeholder='select type'>
                                                        <Option value="Hour">Hour</Option>
                                                        <Option value="Day">Day</Option>
                                                        <Option value="Month">Month</Option>
                                                        <Option value="Year">Year</Option>
                                                    </Select>
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
                                                <Col span={24} >
                                                    <h2 className="h4-package">Sub Space</h2>
                                                </Col> 

                                                <Form.List name={[name, 'subSpaceDTOs']}
                                                    rules={[
                                                        {
                                                        validator: async (_, subSpaces) => {
                                                            if (!subSpaces || subSpaces.length < 1) {
                                                                notification.error({message:"At least 1 sub space"});
                                                            return Promise.reject(new Error('At least 1 sub space'));
                                                            }
                                                        },
                                                        },
                                                    ]}
                                                >
                                                    {(subSpaces, { add, remove }) => (
                                                    <>
                                                        {subSpaces.map(({ key, name, ...restField }) => (
                                                            <Row gutter={24} key={key}>
                                                                <Col span={24} className="subspace">
                                                                    <h4> <AimOutlined /> Sub Space #{key + 1}</h4>
                                                                </Col> 
                                                                <Col span={22} className="subspace">
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="Title"
                                                                    name={[name, 'title']}
                                                                    rules={[{ required: true, message: 'Missing title' }]}
                                                                    >
                                                                    <Input placeholder="Title" />
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col span={10} className="subspace">
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="Price"
                                                                    name={[name, 'price']}
                                                                    rules={[{ required: true, message: 'Missing price' }]}
                                                                    >
                                                                    <Input type="number" placeholder="USD" />
                                                                    </Form.Item>
                                                                </Col>

                                                                <Col span={12}>
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="No of people"
                                                                    name={[name, 'numberOfPeople']}
                                                                    rules={[{ required: true, message: 'Missing number of people' }]}
                                                                    >
                                                                    <Input type="number" placeholder="Number of People" />
                                                                    </Form.Item>
                                                                </Col>

                                                                <Col span={24} className="subspace">
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="Image"
                                                                    name={[name, 'imageUrl']}
                                                                    getValueFromEvent={handleChange}
                                                                    
                                                                    >
                                                                     <Upload
                                                                     action={`${process.env.REACT_APP_URL}/spaces/upload`}
                                                                    multiple={false}
                                                                    maxCount={1}
                                                                    defaultFileList={[]}>
                                                                        <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                                                                    </Upload>
                                                             
                                                                    </Form.Item>
                                                                </Col>
                                                                
                                                                
                                                                {subSpaces.length > 1 ?
                                                                    <Col span={4} style={{left: '85%'}}>
                                                                        <MinusCircleOutlined   onClick={() => remove(name)}> </MinusCircleOutlined>
                                                                        <span style={{color: 'red'}} > Remove sub space #{key + 1}</span>
                                                                    </Col>
                                                                : <></>}

                                                            </Row>
                                                        ))}
                                                        <Col span={24} className="subspace">
                                                            <Form.Item>
                                                                <Button type="dashed" style={{ width: '20%' }} onClick={() => add()} block icon={<PlusOutlined />}>
                                                                    Add new sub space
                                                                </Button>
                                                            </Form.Item>
                                                        </Col>
                                                        
                                                    </>
                                                    )}
                                                </Form.List>

                                                {packages.length > 1 ?
                                                    <Col span={4} style={{left: '85%'}}>
                                                        <MinusCircleOutlined style={{ fontSize: '20px'}} onClick={() => remove(name)} />
                                                        <span style={{color: 'red', fontSize: '18px'}} > Remove package #{key + 1}</span>
                                                    </Col>
                                                : <></>}

                                            </Row>
                                        ))}
                                        <Col span={24} className="h4-package">
                                            <Form.Item>
                                                <Button type="dashed" style={{ width: '20%' }} onClick={() => add()} block icon={<PlusOutlined />}>
                                                    Add new package
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                        
                                    </>
                                    )}
                                </Form.List>
                                {fields.length > 1 ?
                                    <Col span={4} style={{left: '85%'}}>
                                        <MinusCircleOutlined style={{ fontSize: '24px'}}  onClick={() => remove(name)} />
                                        <span style={{color: 'red', fontSize: '20px'}} > Remove service #{key + 1}</span>
                                    </Col>
                                : <></>}
                                

                            </Row>
                        ))}
                        <Col span={24}>
                            <Form.Item>
                                <Button type="dashed" style={{ width: '20%' }} onClick={() => add()} block icon={<PlusOutlined />}>
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
        </ServiceWrapper>
    );

}