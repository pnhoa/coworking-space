import { Space } from 'interfaces/space';
import React from 'react';
import { SpaceItem } from './components/SpaceItem';
import SpaceListWrapper from 'containers/Space/style';

interface Props {
  listData: Space[];
}
export const SpaceList: React.FC<Props> = (props) => {
  const { listData } = props;
  return (
    <SpaceListWrapper>
      <div className='grid__column10'>
        <div className='home__product'>
          <div className='grid__row'>
            {listData.map((item) => (
              <div key={item.id?.toString()} className='grid__column24'>
                <SpaceItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SpaceListWrapper>
  );
};
