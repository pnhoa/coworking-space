import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import spaceApi from 'api/spaceApi';
interface Props {
  spaceId: number;
  servicePackId: number;
}
export const PayPalPayment: React.FC<Props> = ({ spaceId, servicePackId }) => {
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Order',
            amount: {
              currency_code: 'USD',
              value: Number(localStorage.getItem("price")),
            },
          },
        ],
      })
      .then((orderID: any) => {
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(async function (details: any) {
      await spaceApi.paymentSpace(spaceId, servicePackId);
      notification['success']({
        message: 'Payment space successfully!',
        placement: 'topRight',
      });
      navigate('/your-space');
    });
  };


  return (
    <PayPalScriptProvider options={{ 'client-id': `${clientId}` }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={createOrder}
        onApprove={onApprove}
        
      />
    </PayPalScriptProvider>
  );
};
