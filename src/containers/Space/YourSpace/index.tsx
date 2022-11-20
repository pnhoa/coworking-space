import { Image, Pagination } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import TableCustom from 'components/TableCustom';
import queryString from 'query-string';
import { Category, PaginationParams, Space} from 'interfaces';
import React, { useState, useEffect } from 'react';
import { formatCategoryById, formatExpiredDate, formatPrice, formatSpacePaid } from 'utils/common';
import { SubSpaceWrapper } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import spaceApi from 'api/spaceApi';
import categoryApi from 'api/categoryApi';
import { Loading } from 'components/Loading';
import NavBar from 'components/Header';
import { Footer } from 'components/Footer';

export const YourSpaceList: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [spaceList, setSpaceList] = useState<Space[]>()
  const [categoryList, setCategoryList] = useState<Category[]>()
  const customerId = Number(localStorage.getItem('id'));
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 0,
    limit: 20,
    total: 20,
  })
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const data = await spaceApi.getAallByCustomerId(customerId, pagination);
        setSpaceList(data.data)
        setPagination(data.pagination);
        setLoading(false);
        setRefresh(false);
        
      } catch (error) {
        console.log('Failed to fetch space list: ', error)
      }

      setLoading(false)
    })()
  }, [location.search, refresh])

  useEffect(() => {
    (async () => {
      try {
        const categories = await categoryApi.getAll()
        setCategoryList(
          categories.map((category) => ({
            id: category.id,
            name: category.name,
          }))
        )
      } catch (error) {
        console.log('Failed to fetch category list: ', error)
      }
    })()
  }, [])

  const handlePageChange = (page: number) => {
    const queryParams = queryString.parse(location.search);
    const filter = {
      ...queryParams,
      page: page - 1,
    };
    setPagination({ ...pagination, page: page - 1 });
    navigate(`${location.pathname}?${queryString.stringify(filter)}`);
  };
  const handleOnRefresh = () => {
    setRefresh(true);
  };


  const columns = [
    {
      title: 'Image',
      dataIndex: 'largeImage',
      key: 'largeImage',
      width: 120,
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 500,
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      width: 150,
      render: (data) => formatCategoryById(data, categoryList),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 150,
      sorter: (a: Space, b: Space) => a.price - b.price,
      render: (data) => formatPrice(data),
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      width: 90,
    },
    {
      title: 'Available',
      dataIndex: 'numberOfRoom',
      width: 150,
      key: 'numberOfRoom',
      sorter: (a: Space, b: Space) => a.numberOfRoom - b.numberOfRoom,
    },
    {
      title: 'Approved',
      dataIndex: 'approved',
      width: 140,
      key: 'approved',
    },
    {
      title: 'Paid',
      dataIndex: 'paid',
      width: 90,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.paid === value,
      render: (data) => formatSpacePaid(data),
    },

    {
      title: 'Expired Date',
      dataIndex: 'expiredDate',
      key: 'expiredDate',
      width: 140,
      render: (data) => formatExpiredDate(data),
      sorter: (a: Space, b: Space) => new Date(a.expiredDate).getTime() - new Date(b.expiredDate).getTime(),
    },

    {
      title: 'Expired',
      dataIndex: 'expired',
      width: 90,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.expired === value,
      render: (data) => formatSpacePaid(data),
    },

  ] as ColumnsType<Space>

  return (
    <SubSpaceWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
            <NavBar />
            <div className='container'>
              <TableCustom columns={columns} data={spaceList} />
              <div className='product__pagination'>
                <Pagination
                  total={pagination.total}
                  defaultPageSize={20}
                  style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
                  onChange={handlePageChange} />
              </div>
            </div>
            
            <Footer />
        </>

    )}
    </SubSpaceWrapper>
  );
};
