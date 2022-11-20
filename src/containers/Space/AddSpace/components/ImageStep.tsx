import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Image, Input, Row, Space } from "antd";
import FormUploadImage from "components/FormUploadImage";
import { FormContextCustom } from "context/FormContextCustom";
import { FC, useState } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };


export const ImageStep: FC<Props> = ({data, onSuccess }) => {

    const [openUpload, setOpenUpload] = useState(false);

    const [form] = Form.useForm();

    return (
        <div>
            <h2>What does it look like?</h2>
            <h4>We recommend taking professional photos that reflect how awesome your coworking space</h4>
            <Divider />
            <Form name='image-step' scrollToFirstError onFinish={onSuccess} initialValues={data} form={form} >
            <FormContextCustom.Provider value={{ form }}>
                <Row gutter={24}>

                    <Col span={24}>
                        {console.log(data)}
                        {console.log(openUpload)}
                        { data ? 
                        <Col span={24}>
                            {
                                openUpload === true ? <></> :
                                <Col span={24}> 
                                    <Form.Item label='Large Image' initialValue={data.largeImage}>

                                    </Form.Item>
                                    <Col span={24}>
                                        <Button type='primary' onClick={() => (setOpenUpload(!openUpload))} style={{ width: '10%', backgroundColor: '#08966b' }}>
                                            Change picture
                                        </Button>
                                    </Col>
                                    <Image
                                        src={data.largeImage}
                                        alt='image'
                                        style={{
                                            width: '1200px',
                                            height: '800px',
                                            borderRadius: '10px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                             
                                            }} />
                                    
                                    
                                </ Col>
                            }
                               
                            {openUpload === true ? 
                            <Col span={24}>
                                <Form.Item label='Large Image'>
                                    <FormUploadImage name='largeImage' />
                                </Form.Item>
                            </Col> : <></>
                            }
                        </ Col>
                        
                        :
                        <Form.Item label='Large Image'>
                            <FormUploadImage name='largeImage' />
                        </Form.Item>
                    }
                        
                    </Col>
                    <Col span={24}>
                        <h2>ADDITIONAL IMAGES</h2>
                    </Col> 

                    <Col span={24}>
                    <Form.List
                            name="images"   
                        >
                            {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Images' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    noStyle
                                    >
                                        <FormUploadImage name={'image_' + index} />
                                        <Input hidden value={"123"}></Input>
                                    </Form.Item>
                                    {fields.length > 0 ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => remove(field.name)}
                                    />
                                    ) : null}
                                </Form.Item>
                                ))}
                                <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add image
                                </Button>
                                <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                    </Col>

                    <Col span={24}>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' style={{ width: '10%', backgroundColor:'#08966b' }}>
                                NEXT
                            </Button>
                        </Form.Item>
                    </Col>  
                </Row>
                </FormContextCustom.Provider>
            </Form>
        </div>
    );

}