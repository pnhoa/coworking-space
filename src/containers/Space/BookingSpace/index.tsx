import { Footer } from "components/Footer";
import NavBar from "components/Header"
import { Loading } from "components/Loading";
import { MatchSubSpace, SubSpace, User } from "interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { BookingStyles } from "./styles";
import { Col, notification, Row } from "antd";
import { userApi } from "api/userApi";
import { SpaceDetailWrapper } from "containers/SpaceDetail/styles";
import SubSpaceDetail from "./components/SubSpaceDetail";
import { BookingPrice } from "./components/BookingPrice";

interface CustomState {
    matchSubSpace: MatchSubSpace,
    subSpaceList: SubSpace[]
}

const BookingSpace = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState<User>();
    const navigate = useNavigate();

    const state = location.state as CustomState

    const matchSubSpace: MatchSubSpace = state.matchSubSpace
    const subSpaceList: SubSpace[] = state.subSpaceList

    const [subSpace, setSubSpace] = useState(subSpaceList[0])

    const customerId = Number(localStorage.getItem('id'));
    useEffect(() => {
        (async () => {
        if(customerId === 0){
            setTimeout(() => {
            notification.error({ message:"Please login!!"})
            navigate('/login') }, 500);
            
        }
        const user = await userApi.getById(customerId);
        setCustomer(user);
        setLoading(false);
        })();
    }, [customerId, navigate]);

    const handleChangeSubSPace = (subSpaceId: number) => {
        console.log("Goi tai master")
        const match = subSpaceList.find(x => x.id === subSpaceId)
        setSubSpace(match ? match : subSpaceList[0] )
        
    }

    return (
        <SpaceDetailWrapper>
            <BookingStyles>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                    <NavBar />
                        <div className='container'>
                        <h1 className='title'>BOOKING SPACE</h1>
                        {
                            subSpaceList.length ? (
                                <div>
                                <Row>
                                    <Col span={17}>
                                        <SubSpaceDetail
                                            subSpaceList={subSpaceList}
                                            onChangeSub={handleChangeSubSPace}
                                        />
                                    </Col>
                                    <Col span={7}>
                                        <BookingPrice customer={customer} matchSubSpace={matchSubSpace}
                                        subSpace={subSpace}></BookingPrice>
                                    </Col>  
                                </Row>
                                </div>
                            ) : (
                                <div className='cart-detail-empty'>
                                <img
                                    src='https://salt.tikicdn.com/desktop/img/mascot@2x.png'
                                    alt=''
                                    style={{ width: '200px' }}
                                />
                                <p style={{ marginTop: '10px' }}>No space can booking</p>
                                <div style={{ paddingTop: '10px' }}>
                                    <a href='/'>Booking space</a>
                                </div>
                                </div>
                            )
                            }
                        </div>
                    <Footer />
                    </>
                )}
            </BookingStyles>
        </SpaceDetailWrapper>
        
    )
}

export default BookingSpace