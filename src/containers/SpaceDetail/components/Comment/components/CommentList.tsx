import { Comment as CommentAntD, Empty, Pagination } from 'antd';
import { Comment, ListParams } from 'interfaces';
import React from 'react';
import { formatDate } from 'utils/common';
import { CommentStyles } from '../styles';

interface Props {
  comments: Comment[];
  pagination: ListParams;
  paginChange: (page: number) => void;
}

export const CommentList: React.FC<Props> = ({ comments, pagination, paginChange }) => {
  const handlePageChange = (page: number) => {
    if (!paginChange) return;
    paginChange(page);
  };
  return (
    <CommentStyles>
      {!comments.length ? (
        <div id='comment-empty'>
          <Empty />
          <p>Space don't have comment and rating</p>
        </div>
      ) : (
        <>
          <div className='comment-content'>
            {comments.map((comment) => (
              <div className='comment-item'>
                <CommentAntD
                  content={comment.comment}
                  author={comment.customer.name}
                  avatar={
                    comment.customer.profilePicture !== null
                      ? `${comment.customer.profilePicture}`
                      : '../avatar.png'
                  }
                  datetime={formatDate(comment.createdDate)}
                />
              </div>
            ))}
          </div>
          <div className='product__pagination'>
            <Pagination
              total={pagination.total}
              defaultPageSize={pagination.limit}
              style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </CommentStyles>
  );
};
