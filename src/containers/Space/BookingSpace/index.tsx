import { Footer } from "components/Footer";
import NavBar from "components/Header"
import { Loading } from "components/Loading";
import { MatchSubSpace, SubSpace, User } from "interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { BookingStyles } from "./styles";
import { notification } from "antd";
import { userApi } from "api/userApi";


const BookingSpace = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState<User>();
    const navigate = useNavigate();

    const matchSubSpace: MatchSubSpace = location.state.matchSubSpace
    const subSpaceList: SubSpace[] = location.state.subSpaceList

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
    }, []);

    return (
        <BookingStyles>
            {loading ? (
                <Loading />
            ) : (
                <>
                <NavBar />
                <div className='content'>
                    <h1 className='title'>BOOKING SPACE</h1>
                    <div className='container'>
                    {
                        console.log(matchSubSpace)
                        
                    }
                    {
                        console.log(subSpaceList)
                    }
                    </div>
                </div>
                <Footer />
                </>
            )}
        </BookingStyles>
    )
}

export default BookingSpace