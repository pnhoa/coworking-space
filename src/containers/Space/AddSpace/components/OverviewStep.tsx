import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import categoryApi from "api/categoryApi";
import { Category } from "interfaces";
import { FC, useEffect, useState } from "react";

const { Option } = Select
interface Props {
    data: any;
    onSuccess: (data: any) => void;
  }

export const OverviewStep: FC<Props> = ({data, onSuccess }) => {

    const [categoryList, setCategoryList] = useState<Category[]>()

    useEffect(() => {
        (async () => {
          try {
            const categories = await categoryApi.getAll()
            setCategoryList(
              categories.map((category) => ({
                id: category.id,
                name: category.name,
              }))
            )
          } catch (error) {
            console.log('Failed to fetch category list: ', error)
          }
        })()
      }, [])
    
    return (
        <div>
            <h2>Tell TopSpace about your space</h2>
            <Divider />
            <Form name='overview-step' scrollToFirstError onFinish={onSuccess}  initialValues={data} >
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name='name'
                            label='Name of Space'
                            rules={[
                                {
                                required: true,
                                message: 'Please input Name of Space!',
                                whitespace: true,
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name='numberOfRoom'
                            label='Number of Room'
                            rules={[
                                {
                                required: true,
                                message: 'Please input number of room!',
                                whitespace: true,
                                },
                            ]}
                            >
                        <Input type="number" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                    <Form.Item
                        name='categoryId'
                        label='Category'
                        rules={[{ required: true, message: 'Please select a category' }]}
                        >
                        <Select placeholder='Please select a category'>
                            {categoryList?.map((item: Category) => (
                            <Option key={item?.id} value={item?.id}>
                                {item?.name}
                            </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    </Col>
                
                
                    <Col span={6}>
                        <Form.Item
                            name='price'
                            label='Average Price'
                            rules={[
                                {
                                required: true,
                                message: 'Please input Average Price!',
                                whitespace: true,
                                },
                            ]}
                            >
                        <Input type="number" placeholder="USD" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name='minPrice'
                            label='Min Price'
                            rules={[
                                {
                                required: true,
                                message: 'Please input Min Price!',
                                whitespace: true,
                                },
                            ]}
                            >
                        <Input type="number" placeholder="USD" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name='maxPrice'
                            label='Max Price'
                            rules={[
                                {
                                required: true,
                                message: 'Please input Max Price!',
                                whitespace: true,
                                },
                            ]}
                            >
                        <Input type="number" placeholder="USD" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name='unit'
                            label='Unit'
                            rules={[
                                {
                                required: true,
                                message: 'Please select unit!',
                                whitespace: true,
                                },
                            ]}
                            >
                        <Select placeholder='select your unit'>
                            <Option value="Hour">Hour</Option>
                            <Option value="Day">Day</Option>
                            <Option value="Month">Month</Option>
                            <Option value="Year">Year</Option>
                        </Select>
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