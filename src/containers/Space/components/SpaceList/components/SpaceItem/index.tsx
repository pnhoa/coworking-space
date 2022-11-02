import { Space } from 'interfaces';
import React from 'react';
import { Link } from 'react-router-dom';
import SpaceItemWrapper from 'containers/Space/style';
import { SearchOutlined } from '@ant-design/icons';
import { formatPrice } from 'utils/common';

interface Props {
  item: Space;
}

export const SpaceItem: React.FC<Props> = (props) => {
  const { item } = props;
  return (
    <SpaceItemWrapper>
      <Link to={`/space/${item.id}`} className='home__productitems'>
        <div
          className='home__productitemsimg'
          style={{ backgroundImage: `url(${item.largeImage})`}}
        ></div>
        <h3 className='home__productitemsname'>{item.name}</h3>
        <h4 className='home__productitemsaddress'>{item.district}, {item.province}, {item.country}</h4>
        <div className='home__productprice'>
          <span className='home__productitemsprice'>{formatPrice(Number(item.price))}/{item.unit}</span>
          
        </div>
        <div className='btn_cart'>
            <i>
              <SearchOutlined style={{ marginRight: '5px' }} />
            </i>
            ENQUIRE NOW
          </div>
      </Link>
    </SpaceItemWrapper>
  );
};
