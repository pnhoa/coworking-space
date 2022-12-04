import { Button, Col, Divider, Form, Image, Row, UploadProps } from "antd";
import Upload, { RcFile } from "antd/lib/upload";
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

    const [fileList, setFileList] = useState<any[]>([]);
    const [fileUrls, setFileUrls] = useState<string[]>([]);
    
      const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };

      const handleChange = (e: any) => {
        const newUrl = e.file.response
        if(newUrl !== undefined) {
            fileUrls.push(newUrl)
            setFileUrls(fileUrls)
        }
        
        return fileUrls;
      };
    
      const onPreview = async (file: any) => {
        let src = file.url as string;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
          });
        }
      };

    return (
        <div>
            <h2>What does it look like?</h2>
            <h4>We recommend taking professional photos that reflect how awesome your coworking space</h4>
            <Divider />
            <Form name='image-step' scrollToFirstError onFinish={onSuccess} initialValues={data} form={form} >
            <FormContextCustom.Provider value={{ form }}>
                <Row gutter={24}>
                    <Col span={24}>
                        <h2>LARGE IMAGE</h2>
                    </Col>
                    <Col span={24}>
                        { data ? 
                        <Col span={24}>
                            {
                                openUpload === true ? <></> :
                                <Col span={24} style={{paddingBottom: '40px'}}> 
                                    <Form.Item  initialValue={data.largeImage}
                                    rules={[
                                        {
                                        required: true
                                        },
                                    ]}>

                                    </Form.Item>
                                    <Col span={24} >
                                        <Button type='primary' onClick={() => (setOpenUpload(!openUpload))} style={{ width: '10%', backgroundColor: '#08966b', paddingLeft: '0px' }}>
                                            Change picture
                                        </Button>
                                    </Col>
                                    <Image
                                        src={data.largeImage}
                                        alt='image'
                                        style={{
                                            width: '1200px',
                                            height: '800px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                             
                                            }} />
                                    
                                    
                                </ Col>
                            }
                               
                            {openUpload === true ? 
                            <Col span={24}>
                                <Form.Item 
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
                        <Form.Item 
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
                        <h2>ADDITIONAL IMAGES</h2>
                    </Col>
                    <Col span={24} style={{paddingBottom: '40px'}}>
                        <Form.Item
                            name="imageUrls"
                            getValueFromEvent={handleChange}
                        >
                        <Upload
                            action={`${process.env.REACT_APP_URL}/spaces/upload`}
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && '+ Upload'}
                        </Upload>
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
                </FormContextCustom.Provider>
            </Form>
        </div>
    );

}