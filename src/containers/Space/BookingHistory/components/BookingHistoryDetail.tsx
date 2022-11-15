import { Button, Col, Image, Modal, notification, Row } from 'antd';
import bookingApi from 'api/bookingApi';
import { Booking, CancelPayload, Status } from 'interfaces';
import React, { useState } from 'react';
import { formatDate, formatBookingStatus, formatPrice } from 'utils/common';
import { BookingHistoryDetailStyles } from './styles';

interface Props {
  bookings: Booking[];
  customerId: number;
  onRefresh: () => void;
}
export const BookingHistoryDetail: React.FC<Props> = ({ bookings, customerId, onRefresh }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingCancel, setBookingCancel] = useState<Booking>();
  const checkCancelBooking = (bookingItem: Booking) => {
    return (
       String(bookingItem.status) === 'PENDING'
    );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async (orderId: number) => {
    const cancelForm: CancelPayload = {
      userId: customerId,
      status: Status.CANCELLED,
    };
    try {
      await bookingApi.cancel(orderId, cancelForm);
      notification.success({ message: 'Cancel booking successfully!' });
      onRefresh();
    } catch (error) {
      notification.error({ message: 'Fail to cancel bookinh. Please try again!!' });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <BookingHistoryDetailStyles>
      <div className='container'>
        <h1 className='order__title'>BOOKING HISTORY</h1>
        <div className='nav__title'>
          <Row>
            <Col span={1}>ID</Col>
            <Col span={6}>Sub Space</Col>
            <Col span={3}>Booking Date</Col>
            <Col span={3}>Start Date</Col>
            <Col span={3}>End Date</Col>
            <Col span={3}>Total Price</Col>
            <Col span={2}>Status</Col>
            <Col span={2}>Cancel Booking</Col>
          </Row>
        </div>
        <div className='orders_content'>
          {bookings.map((item, index) => (
            <Row className='orders_content-item' key={item.id}>
              <Col span={1}>{index + 1}</Col>
              <Col span={6}>
                <div className='detail-order-item'>
                  <div className='detail-content'>
                      <div className='item__thumbnail'>
                        {item.subSpaceImage ? (
                          <Image
                            src={`${item.subSpaceImage}`}
                            alt={item.subSpaceTitle}
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '6px',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                          ></Image>
                        ) : (
                          <Image src={'default.png'}></Image>
                        )}
                      </div>
                      <div className='item__name'>
                        <a href={`/space/${item.spaceId}`}>{item.subSpaceTitle}</a>
                      </div>
                    </div>

                </div>
              </Col>
              <Col span={3}>{formatDate(item.createdDate?.toString())}</Col>
              <Col span={3}>{formatDate(item.startDate.toString())}</Col>
              <Col span={3}>{formatDate(item.endDate.toString())}</Col>
              <Col span={3} style={{ fontWeight: 'bold', color: '#1890ff' }}>
                {formatPrice(item.totalPrice)}
              </Col>
              <Col span={2}>{formatBookingStatus(String(item.status))}</Col>
              {checkCancelBooking(item) ? (
                <Col span={2}>
                  <Button
                    danger
                    onClick={() => {
                      setBookingCancel(item);
                      showModal();
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              ) : (
                <Col span={2}></Col>
              )}
            </Row>
          ))}
        </div>
      </div>

      <Modal
        title='Cancel Booking'
        className='cancel-modal'
        visible={isModalVisible}
        onOk={() => {
          handleOk(bookingCancel!.id);
          setIsModalVisible(false);
        }}
        onCancel={handleCancel}
      >
        Are you sure to cancel booking ?
      </Modal>
    </BookingHistoryDetailStyles>
  );
};
