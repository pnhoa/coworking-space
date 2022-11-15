import bookingApi from "api/bookingApi";
import { Booking } from "interfaces";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { BookingHistoryStyles } from "./styles";
import { Loading } from "components/Loading";
import NavBar from "components/Header";
import { Pagination } from "antd";
import { Footer } from "components/Footer";
import { BookingHistoryDetail } from "./components/BookingHistoryDetail";


export const BookingHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookings, setBookings] = useState<Booking[]>();
  const customerId = Number(localStorage.getItem('id'));
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 20,
    total: 20,
  });
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await bookingApi.getApi(customerId, pagination);
      setBookings(data.data);
      setPagination(data.pagination);
      setLoading(false);
      setRefresh(false);
    })();
  }, [location.search, refresh]);

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
  return (
    <BookingHistoryStyles>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className='content'>
            <BookingHistoryDetail
              bookings={bookings as any}
              customerId={customerId}
              onRefresh={handleOnRefresh}
            />
            <div className='product__pagination'>
              <Pagination
                total={pagination.total}
                defaultPageSize={20}
                style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
                onChange={handlePageChange}
              />
            </div>
          </div>

          <Footer />
        </>
      )}
    </BookingHistoryStyles>
  );

}