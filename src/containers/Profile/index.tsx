import { Col, notification, Row } from 'antd';
import { userApi } from 'api/userApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { User } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileUpdate } from './components/ProfileUpdate';
import { ProfileStyles } from './styles';

export const ProfilePage = () => {
  const [customer, setCustomer] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate()

  const customerId = Number(localStorage.getItem('id'));
  useEffect(() => {
    (async () => {
      if(customerId === 0){
        setTimeout(() => {
          notification.error({ message:"Please login!!"})
          navigate('/login') }, 500);
        
      } else {
        const user = await userApi.getById(customerId);
        setCustomer(user);
        setLoading(false);
      }
      
    })();
  }, [refresh]);

  return (
    <ProfileStyles>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className='content'>
            <h1 className='title'>USER INFORMATION</h1>
            <div className='container'>
              <Row justify='center'>
                <Col span={8}>
                  <ProfileInfo customer={customer as any} />
                </Col>
                <Col span={16}>
                  <ProfileUpdate
                    customer={customer as any}
                    onRefresh={() => setRefresh(!refresh)}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <Footer />
        </>
      )}
    </ProfileStyles>
  );
};
