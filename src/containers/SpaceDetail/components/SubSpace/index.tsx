import { Button, Image, notification } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import TableCustom from 'components/TableCustom';
import { Package, ServiceSpace, SubSpace } from 'interfaces';
import { ModalForwardRefHandle } from 'interfaces/modal';
import React, { useRef } from 'react';
import { formatPrice } from 'utils/common';
import { SubSpaceWrapper } from './styles';
import   MatchSubSpaceModal from '../MatchSubSpace'
import { useNavigate } from 'react-router-dom';

interface Props {
  serviceSpace: ServiceSpace;
  customerId: string
}
export const SubSpaceList: React.FC<Props> = ({ serviceSpace, customerId }) => {

  const packages : Package[] = serviceSpace?.packages ? serviceSpace?.packages?.map((item) => ({
    id: item?.id,
    type: item?.type,
    note: item?.note,
    subSpaces: item?.subSpaces
  }))  : []

  const matchSubSpaceModalRef = useRef<ModalForwardRefHandle>(null)
  const navigate = useNavigate()

  const subSpaceInfo: SubSpace[] = []

  packages.forEach((item)  => {
    item.subSpaces.forEach(subSpace => {
      subSpace.packageType = subSpace.package?.type
      subSpaceInfo.push(subSpace)
    })
  })

  const handleBooking = () => {
    if(Number(customerId) === 0){
      setTimeout(() => {
        notification.error({ message:"Please login!!"})
        navigate('/login') }, 500);
    } else {
      matchSubSpaceModalRef.current && matchSubSpaceModalRef.current.open()
    }
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
        <MatchSubSpaceModal ref={matchSubSpaceModalRef} />
    </SubSpaceWrapper>
  );
};
