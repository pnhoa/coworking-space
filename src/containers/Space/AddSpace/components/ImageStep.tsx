import { Button, Col, Divider, Form, Image, Row } from "antd";
import FormUploadImage from "components/FormUploadImage";
import { FormContextCustom } from "context/FormContextCustom";
import { FC, useState } from "react";


interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

//https://stackoverflow.com/questions/66670744/how-to-get-the-value-of-upload-from-form-item-in-antd
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
                        { data ? 
                        <Col span={24}>
                            {
                                openUpload === true ? <></> :
                                <Col span={24}> 
                                    <Form.Item label='Large Image' initialValue={data.largeImage}
                                    rules={[
                                        {
                                        required: true
                                        },
                                    ]}>

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
                                <Form.Item label='Large Image'
                                    rules={[
                                        {
                                        required: true
                                        },
                                    ]}
                                >
                                    <FormUploadImage name='largeImage' />
                                </Form.Item>
                            </Col> : <></>
                            }
                        </ Col>
                        
                        :
                        <Form.Item label='Large Image'
                        rules={[
                            {
                            required: true
                            },
                        ]}
                        >
                            <FormUploadImage name='largeImage' />
                        </Form.Item>
                    }
                        
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