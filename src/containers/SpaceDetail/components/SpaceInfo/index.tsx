import { Rate } from 'antd';
import categoryApi from 'api/categoryApi';
import { SpaceDetailWrapper } from 'containers/SpaceDetail/styles';
import { SpaceDetail } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { formatPrice } from 'utils/common';

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
        <h4 className='ProductName'>{space?.name}</h4>
        <p className='ProductDescription'>{space?.spaceDescription.description}</p>
        <div className='ProductTable'>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Category</span>
            <span className='ProductItem'>{categoryName}</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Rating</span>
            <span className='ProductItem'>
              {space.ratingAverage ? (
                <Rate allowHalf value={space.ratingAverage} />
              ) : (
                'Not Rating'
              )}
            </span>
          </div>
        </div>
        {space.numberOfRoom ? (
          <div className='ProductCartWapper'>
            <div className='ProductPriceWapper'>{formatPrice(space?.price)}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </SpaceDetailWrapper>
  );
};
