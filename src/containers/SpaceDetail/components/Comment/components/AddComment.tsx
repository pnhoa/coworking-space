import { Button, Form, notification } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { commentApi } from 'api/commentApi';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  productId: number;
  onSubmit: () => void;
}

export const AddComment: React.FC<Props> = ({ productId, onSubmit }) => {
  const navigate = useNavigate();
  const customerId = Number(localStorage.getItem('id'));

  const handleOnFinish = async (values: any) => {
    try {
      if (!customerId) {
        notification.info({
          message: 'Please login to comment!',
          placement: 'top',
        });
        return navigate('/login');
      }
      await commentApi.create({ ...values, productId, customerId });
      notification.success({
        message: `Add comment successfully!`,
        placement: 'bottomRight',
      });
      onSubmit();
    } catch (error) {
      notification.error({
        message: `Thất bại !!!!`,
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div>
      <Form onFinish={handleOnFinish}>
        <Form.Item
          name='comment'
          rules={[
            {
              required: true,
              message: 'Please write comment before submit',
            },
          ]}
        >
          <TextArea placeholder='Write your comment...' id='textarea'>
            {'adcndn'}
          </TextArea>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
