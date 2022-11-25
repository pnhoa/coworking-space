import { notification } from 'antd';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingList from './components/BookingList/List';
import { SubSpaceWrapper } from './styles';


export const BookingManagement = () => {

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const customerId = Number(localStorage.getItem('id'));
    useEffect(() => {
      (async () => {
        if(customerId === 0){
          setTimeout(() => {
            notification.error({ message:"Please login!!"})
            navigate('/login') }, 500);
            
        } 
        setLoading(false)
        
      })();
    }, []);

    return (
        <SubSpaceWrapper>
          {loading ? (
            <Loading />
             ) : (
            <>
                <NavBar />
                <div className='container'>
                  <h1 className='title'>BOOKING MANAGEMENT</h1>
                  <BookingList></BookingList>
                </div>
                
                <Footer />
            </>
            )}
        
        </SubSpaceWrapper>
      );
}