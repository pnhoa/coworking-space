import { Pagination, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import bookingApi from 'api/bookingApi'
import GroupActions from 'components/GroupActions'
import NoteButton from 'components/NoteButton'
import { Booking, ListParams, ListResponse, PaginationParams } from 'interfaces'
import { parse } from 'query-string'
import { FC, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDate, formatPrice } from 'utils/common'
import StatusSelect from '../StatusSelect'
import OrderFilter from './Filter'
import ListLayoutStyles from './styles'
import queryString from 'query-string'

const BookingList: FC = () => {
  const { search } = useLocation()
  const location = useLocation();
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem("id"));

  const [bookingList, setBookingList] = useState<Booking[]>()

  const [pagination, setPagination] = useState<PaginationParams>({
    page: 0,
    limit: 20,
    total: 20,
  })

  const [loading, setLoading] = useState(true)

  const [refetch, setRefetch] = useState(false)

  const queryParams: ListParams = useMemo(() => {
    const params = parse(search)
    return {
      ...params,
      page: Number(params.page) || 0,
      limit: Number(params.limit) || 20,
    }
  }, [search])

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const { data, pagination }: ListResponse<Booking> = await bookingApi.getAll(userId, queryParams)
        setBookingList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch booking list: ', error)
      }

      setLoading(false)
    })()
  }, [queryParams, refetch])

  const handlePageChange = (page: number) => {
    const filter = {
      ...queryParams,
      page: page - 1,
    }
    navigate(`${location.pathname}?${queryString.stringify(filter)}`);
  }

  const handleFilterChange = (newFilters: any) => {
    const filters = {
      ...queryParams,
      page: 0,
      ...newFilters,
    };
    navigate(`${location.pathname}?${queryString.stringify(filters)}`);
  }

  const handleClearFilter = () => {
    navigate(`${location.pathname}`);

  }

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
    },
    {
      title: 'Total price',
      dataIndex: 'totalPrice',
      sorter: (a: Booking, b: Booking) => a.totalPrice - b.totalPrice,
      width: 180,
      render: (data) => formatPrice(data),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 150,
      render: (status, record) => (
        <StatusSelect status={status} bookingId={record.id} refetch={() => setRefetch(!refetch)} />
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      width: 150,
      render: (data) => formatDate(data),
    },
    {
      fixed: 'right',
      width: 80,
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => (
        <GroupActions>
          <NoteButton title={record?.note} />
        </GroupActions>
      ),
    },
  ] as ColumnsType<Booking>

  return (
    <ListLayoutStyles>
      <div>
        <OrderFilter onSubmitFilter={handleFilterChange} onClearFilter={handleClearFilter} />
        <Table
          style={{ marginTop: '10px' }}
          dataSource={bookingList}
          columns={columns}
          rowKey='id'
          pagination={false}
          loading={loading}
          scroll={{ x: 1600 }}
        />
        <div className='list-layout__pagination-bottom'>
          <Pagination
            defaultCurrent={1}
            total={pagination.total}
            current={pagination.page}
            onChange={handlePageChange}
            showQuickJumper
            defaultPageSize={20}
          />
        </div>
      </div>
    </ListLayoutStyles>
  )
}

export default BookingList
