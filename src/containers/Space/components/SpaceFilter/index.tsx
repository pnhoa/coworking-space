import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { SearchByName } from './components/SearchByName';
import SpaceFiltersWrapper from './styles';

interface Props {
  onChange: (value: Object) => void;
}

export const SpaceFilter: React.FC<Props> = ({ onChange }) => {
  let newFilter = {};

  const handleSearch = (newSearch: string) => {
    newFilter = {
      ...newFilter,
      q: newSearch,
    }
  }

  const handleOnFilterClick = () => {
    if (!onChange) return;
    onChange(newFilter);
  }

  return (
    <SpaceFiltersWrapper>
      <div className='product_filters site-button-ghost-wrapper'>

        <Button type='primary' ghost size='large' style={{ marginRight: '0px' }} onClick={handleOnFilterClick}>
            {' '}
            <SearchOutlined />{' '}
        </Button>
        <SearchByName onChange={handleSearch} />
        
      </div>
    </SpaceFiltersWrapper>
  )
}
