import { Input } from 'antd';
import React from 'react';
import { SearchWrapper } from './styles';
interface Props {
  onChange: Function;
}
export const SearchByName: React.FC<Props> = ({ onChange }) => {
  const handleSearch = (e: React.SyntheticEvent) => {
    if (onChange) {
      onChange(e.currentTarget.getAttribute('value'));
    }
  };
  return (
    <SearchWrapper>
      <Input className='input'
        placeholder='Search Space, City or Country...'
        name='p'
        onMouseOut={handleSearch}
        size = 'large'
        style={{ borderBlockColor:'#FFFFFF',  borderRadius: '1px', width: '250%'  }}
      />
    </SearchWrapper>
  );
};
