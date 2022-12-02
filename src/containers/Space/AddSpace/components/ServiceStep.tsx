import { MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { FC, useEffect, useState } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }


export const ServiceStep: FC<Props> = ({data, onSuccess }) => {


    const [form] = Form.useForm();
    // const [fileList, setFileList] = useState<string[]>([]);

    // useEffect(() => {
    //     form.setFields([
    //       {
    //         name: "images",
    //         value: fileList,
    //       },
    //     ]);
    //   }, [fileList]); 

    const handleFileInputChange = (e: any) => {
        const url = window.URL.createObjectURL(e.target.files[0]);
        // const prevFileList = fileList;
        // prevFileList.push(url)
        // setFileList(prevFileList)
        // console.log(prevFileList)
        return url;
      };

      const handleChange = (e: any) => {
        const url = (e.target.files[0]);
        console.log(url)
        return url;
      };


    return (
        <div>
            <h2>Tell me about your service?</h2>
            <Divider />
            <Form name='service-step' scrollToFirstError onFinish={onSuccess} initialValues={data} form={form}>
            
  
                <Form.List name="services"
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
                                    <h2>Service #{key + 1}</h2>
                                </Col> 
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

                                <Col span={24}>
                                    <h2>Package</h2>
                                </Col> 

                                
                                <Form.List name={[name, 'packages']}
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
                                                    <h4>Package #{key + 1}</h4>
                                                </Col> 
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
                                                <Col span={24}>
                                                    <h2>Sub Space</h2>
                                                </Col> 

                                                <Form.List name={[name, 'subSpaces']}
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
                                                                <Col span={24}>
                                                                    <h4>Sub Space #{key + 1}</h4>
                                                                </Col> 
                                                                <Col span={24}>
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

                                                                {/* <Col span={24}>
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="Image"
                                                                    name={[name, 'imageUrl']}
                                                                    >
                                                                    <Input type="file" onChange={handleFileInputChange}  />
                                                                    </Form.Item>
                                                                </Col> */}

                                                                <Col span={24}>
                                                                    <Form.Item
                                                                    {...restField}
                                                                    label="Image"
                                                                    name={[name, 'imageUrl']}
                                                                    rules={[
                                                                        {
                                                                        required: true
                                                                        },
                                                                    ]}
                                                                    >
                                                                         <Input className='mt-10 pointer' type='file' onChange={handleFileInputChange} />
                                                                    {/* <Upload
                                                                    onChange={handleChange}
                                                                    multiple={false}
                                                                    defaultFileList={[]}>
                                                                        <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                                                                    </Upload> */}
                                                             
                                                                    </Form.Item>
                                                                </Col>
                                                                
                                                                
                                                                {subSpaces.length > 1 ?
                                                                    <Col span={4}>
                                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                                    </Col>
                                                                : <></>}

                                                            </Row>
                                                        ))}
                                                        <Col span={24}>
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
                                                    <Col span={4}>
                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Col>
                                                : <></>}

                                            </Row>
                                        ))}
                                        <Col span={24}>
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
                                    <Col span={4}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
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
        </div>
    );

}