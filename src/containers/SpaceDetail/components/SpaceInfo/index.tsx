import { CalendarOutlined, CompassOutlined } from '@ant-design/icons';
import { Divider, Rate } from 'antd';
import categoryApi from 'api/categoryApi';
import ReadMore from 'components/ReadMore';
import { SpaceDetailWrapper } from 'containers/SpaceDetail/styles';
import { SpaceDetail } from 'interfaces';
import React, { useEffect, useState } from 'react';

interface Props {
  data: SpaceDetail;
}

export const SpaceInfor: React.FC<Props> = ({ data }) => {
  const { ...space } = data;
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    (async () => {
      if (space.categoryId) {
        const { data } = await categoryApi.get(Number(space.categoryId));
        setCategoryName(data.name);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <SpaceDetailWrapper>
      <div>
        <h1 className='ProductName'>{space?.name}</h1>
        <div className='spaceJoinDate'>
          <CalendarOutlined /> 
          <p className='spaceJoinDateDetail'>{space.spaceDescription.openingDate}</p>
        </div>
        <div className='spaceAddress'>
          <CompassOutlined />
          <p  className='spaceAddressDetail'> {space.spaceAddress.addressLine1}, {space.spaceAddress.district}, {space.spaceAddress.province}, {space.spaceAddress.country}</p>
        </div>
        <Divider></Divider>
        <div className='spaceDescription'>{space?.spaceDescription.shortDescription}</div>
        <ReadMore  child={(space?.spaceDescription.description).toString()}></ReadMore>
        <div className='ProductTable'>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Service Type</span>
            <span className='ProductItem'>{categoryName}</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Rating</span>
            <span className='ProductItem'>
              {space.ratingAverage ? (
                <Rate allowHalf value={space.ratingAverage} disabled />
              ) : (
                'Not Rating'
              )}
            </span>
          </div>
        </div>
      </div>
    </SpaceDetailWrapper>
  );
};
