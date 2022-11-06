import { Button, Image } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import TableCustom from 'components/TableCustom';
import { Package, ServiceSpace, SubSpace } from 'interfaces';
import React from 'react';
import { formatPrice } from 'utils/common';
import { SubSpaceWrapper } from './styles';

interface Props {
  serviceSpace: ServiceSpace;
}
export const SubSpaceList: React.FC<Props> = ({ serviceSpace }) => {

  const packages : Package[] = serviceSpace?.packages ? serviceSpace?.packages?.map((item) => ({
    id: item?.id,
    type: item?.type,
    note: item?.note,
    subSpaces: item?.subSpaces
  }))  : []

  const subSpaceInfo: SubSpace[] = []

  packages.forEach((item)  => {
    item.subSpaces.forEach(subSpace => {
      subSpace.packageType = subSpace.package?.type
      subSpaceInfo.push(subSpace)
    })
  })

  const handleBooking = () => {

  }


  const columns: ColumnsType<SubSpace> = [
    {
      title: 'IMAGE',
      dataIndex: 'imageUrl',
      width: 150,
      render: (data: any) => (
        <Image
          src={data ? data : `no-data.jpeg`}
          alt='image'
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '6px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      ),
    },
    {
      title: 'NAME',
      dataIndex: 'title',
      width: 300,
    },
    {
      title: 'PEOPLE',
      dataIndex: 'numberOfPeople',
      width: 100,
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      render: (data) => formatPrice(data),
    },
    {
      title: 'DURATION',
      dataIndex: 'packageType',
      width: 150,
    },
    {
      title: 'AVAILABILITY',
      fixed: 'right',
      width: 240,
      dataIndex: 'id',
      key: 'id',
      render: (data) => (
        <Button type='primary' ghost size='large'  className='booking-space-table booking-space-center' onClick={handleBooking}>
        {' '}
          BOOKING NOW{' '}
        </Button>
      ),
    },
  ]

  return (
    <SubSpaceWrapper>
        <TableCustom columns={columns} data={subSpaceInfo} />
    </SubSpaceWrapper>
  );
};
