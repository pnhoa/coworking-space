import { SpaceList } from 'containers/Space/components/SpaceList';
import { Space } from 'interfaces';
import React from 'react';
import { SpaceRelatedWrapper } from './styles';

interface Props {
  data: Space[];
}
export const SpaceRelated: React.FC<Props> = ({ data }) => {
  const [...spaceList] = data;

  return (
    <SpaceRelatedWrapper>
      <span className='header'>Spaces Nearby</span>
      <SpaceList listData={spaceList} />
    </SpaceRelatedWrapper>
  );
};
