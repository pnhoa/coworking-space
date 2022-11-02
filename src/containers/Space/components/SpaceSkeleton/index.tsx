import { Col, Row, Skeleton } from 'antd';

export const SpaceSkeleton = () => {
  const SkeletonList: any[] = [];
  for (let i = 0; i < 8; i++) {
    SkeletonList.push(
      <Col span={6}>
        <Skeleton />
      </Col>
    );
  }
  return (
    <div className='grid'>
      <Row gutter={[24, 48]}> {SkeletonList} </Row>
    </div>
  );
};
