import { Button, Form, notification, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { commentApi } from 'api/commentApi';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  spaceId: number;
  onSubmit: () => void;
}

export const AddComment: React.FC<Props> = ({ spaceId, onSubmit }) => {
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('id'));

  const handleOnFinish = async (values: any) => {
    try {
      if (!userId) {
        notification.info({
          message: 'Please login to comment!',
          placement: 'top',
        });
        return navigate('/login');
      }
      await commentApi.create({ ...values, spaceId, userId });
      notification.success({
        message: `Add comment successfully!`,
        placement: 'bottomRight',
      });
      onSubmit();
    } catch (error) {
      notification.error({
        message: `Failed !!!!`,
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div>
      <Form onFinish={handleOnFinish} initialValues={{
                rate: 5,
                spaceId: spaceId
      }} >
        <Form.Item name='rate' >
            <Rate />
        </Form.Item>
        <Form.Item name='spaceId' hidden></Form.Item>
        <Form.Item
          name='content'
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
