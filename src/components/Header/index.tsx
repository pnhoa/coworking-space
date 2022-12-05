/* eslint-disable react-hooks/exhaustive-deps */
import { PlusOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/hook';
import { SpaceFilter } from 'containers/Space/components/SpaceFilter';
import { useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { checkRefreshToken } from 'redux/authSlice';
import { setLoading } from 'redux/loadingSlice';
import { HeaderWrapper } from './styles';
import queryString from 'query-string';
import { Button, notification } from 'antd';
import { UserDropdown } from './UserDropdown';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = Number(localStorage.getItem('id'));
  const location = useLocation();
  const navigate = useNavigate();


  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number(params.page) || 0,
      limit: Number(params.limit) || 20,
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        const resultAction = await dispatch(checkRefreshToken({ refreshToken }));
        unwrapResult(resultAction);
      }
      dispatch(setLoading());
    })();
  }, []);



  const handleFilterChange = (newFilters: any) => {
    const filters = {
      ...queryParams,
      page: 0,
      ...newFilters,
    };
    navigate(`/?${queryString.stringify(filters)}`);
  };

  const handleAddSpace = () => {
    if(loggedInUser === 0){
      setTimeout(() => {
        notification.error({ message:"Please login!!"})
        navigate('/login') }, 500);
    } else {
      navigate('/add-space')
    }
    
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/register')
  }

  return (
    <HeaderWrapper>
    
      <div className={'navBar active'}>
        <Link to={'/'} className='header'>
          <img src={'/logo-final1.png'} alt="logo" height={57} width={244} />
        </Link>
        <div className='search'>
          <SpaceFilter  onChange={handleFilterChange} />
        </div>

        <div className='add-space'>
          <Button type='primary' ghost size='large' style={{ marginRight: '0px' }} onClick={handleAddSpace}>
              {' '}
              <PlusOutlined />  ADD YOUR SPACE{' '}
          </Button>
        </div>

        <div className='navbar_right'>
          {!loggedInUser ? (
            <>
              <Button className='button-sign-up' type='primary' ghost size='large' style={{ marginRight: '30px' }} onClick={handleSignup}>
                {' '}
                <span style={{color: '#202124'}}>Sign up</span>
                {' '}
              </Button>
              <Button className='button-sign-in' type='primary' ghost size='large' style={{ marginRight: '0px' }} onClick={handleLogin}>
                {' '}
                <span style={{color: '#202124'}}>Login</span>
                {' '}
              </Button>
            </>
          ) : (
            <>
              <li className='nav__itemsaccount'>
                <UserDropdown />
              </li>
            </>
          )}
          
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default NavBar;
