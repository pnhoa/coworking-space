
import { Button, Form, Input, notification } from "antd";
import spaceApi from "api/spaceApi";
import { Footer } from "components/Footer";
import NavBar from "components/Header";
import { SpaceDetailWrapper } from "containers/SpaceDetail/styles";
import { FormContextCustom } from "context/FormContextCustom";
import { MatchSubSpace, SubSpace, User } from "interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingStyles } from "../../styles";



export const BookingConfirm = () => {

    const [form] = Form.useForm();

    const location = useLocation();
    const navigate = useNavigate();

    const matchSubSpace: MatchSubSpace = location.state.matchSubSpace
    const subSpace: SubSpace = location.state.subSpace
    const customer: User = location.state.customer
    const totalPrice: number = location.state.totalPrice
    const numberTimePerUnit = location.state.numberTimePerUnit

    const onFinish = async (values: any) => {
        form
        .validateFields()
        .then( async ({...values }) => {
        return spaceApi.bookingSubSpace(values)
        })
        .then(async (response: any) => {
            notification.info({message: "Booking successfully!"})
            navigate('/booking/history')

        })
        .catch((error) => {
          notification.error({ message: error.message })
          navigate("/")
        })
    };
    return (
        <SpaceDetailWrapper>
            <BookingStyles>
                <>
                <NavBar />
                    <div className='container'>
                    <h1 className='title' style={{paddingLeft:'0px'}}>COMFIRM BOOKING</h1>
                    <Form name='booking' scrollToFirstError onFinish={onFinish} form={form}>
                        <FormContextCustom.Provider value={{ form }}>
                            <Form.Item
                            name='name'
                            label='Full Name'
                            initialValue={customer?.name}
                            rules={[
                                {
                                message: 'Please input your full name!',
                                whitespace: true,
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            name='companyName'
                            label='Company name'
                            rules={[
                                {
                                message: 'Please input your full name!',
                                whitespace: true,
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            name='phoneNumber'
                            label='Phone Number'
                            initialValue={customer?.phoneNumber}
                            rules={[
                                {
                                message: 'Please input your phone number!',
                                },
                                {
                                len: 10,
                                message: 'Please input 10 number ',
                                },
                            ]}
                            >
                            <Input type='number' />
                            </Form.Item>

                            <Form.Item
                            name='email'
                            label='E-mail'
                            initialValue={customer?.email}
                            rules={[
                                {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                                },
                                {
                                message: 'Please input your E-mail!',
                                },
                            ]}
                            >
                            <Input disabled={true} />
                            </Form.Item>
                            <Form.Item name="startDate" label="Start date" initialValue={matchSubSpace.startDate}>
                                <Input disabled={true} />
                            </Form.Item>
                            <Form.Item name="endDate" label="End date" initialValue={matchSubSpace.endDate}>
                            <Input disabled={true} />
                            </Form.Item>
                            <Form.Item
                                name='numberOfPeople'
                                label='Number of People'
                                initialValue={matchSubSpace.numberOfPeople}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='totalPrice'
                                label='Total Price'
                                initialValue={totalPrice} hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='note'
                                label='Note'
                            >
                            <Input />
                            </Form.Item>
                            <Form.Item
                                name='userId'
                                label='User'
                                initialValue={customer.id} hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='spaceId'
                                label='space Id'
                                initialValue={subSpace.spaceId} hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='subSpaceId'
                                label='sub space Id'
                                initialValue={subSpace.id} hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='numberTimePerUnit'
                                label='numberTimePerUnit'
                                initialValue={numberTimePerUnit} hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name='status'
                                label='Status'
                                initialValue="PENDING" hidden={true}
                            >
                            <Input type='number'disabled={true}/>
                            </Form.Item>
                            <Form.Item>
                            <Button type='primary' htmlType='submit' style={{ width: '100%', backgroundColor:'#08966b' }}>
                                COMFIRM BOOKING
                            </Button>
                            </Form.Item>
                        </FormContextCustom.Provider>
                    </Form>
                    </div>
                <Footer />
                </>
            </BookingStyles>
        </SpaceDetailWrapper>
    );
}