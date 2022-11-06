import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { SpaceDetailWrapper } from 'containers/SpaceDetail/styles';
import { SpaceDetail } from 'interfaces';

interface Props {
  data: SpaceDetail;
}

export const SpaceAmenity: React.FC<Props> = ({ data }) => {
  const { ...space } = data;

  return (
    <SpaceDetailWrapper>
        <div>
        <Row gutter={20}>
          <Col span={3} className='fw-500'>Internet</Col>
          <Col span={1} >
            {space?.spaceAmenity.internet ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>TV</Col>
          <Col span={1} >
            {space?.spaceAmenity.tv ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Parking</Col>
          <Col span={1} >
            {space?.spaceAmenity.parking ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Air Conditioner</Col>
          <Col span={1} >
            {space?.spaceAmenity.airConditioner ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Heater</Col>
          <Col span={1} >
            {space?.spaceAmenity.heater ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          
        </Row>

        <Row gutter={20}>
          
          <Col span={3} className='fw-500'>Cable TV</Col>
          <Col span={1} >
            {space?.spaceAmenity.cableTV ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Toilet</Col>
          <Col span={1} >
            {space?.spaceAmenity.toilet ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Motel</Col>
          <Col span={1} >
            {space?.spaceAmenity.motel ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
          <Col span={3} className='fw-500'>Catering</Col>
          <Col span={1} >
            {space?.spaceAmenity.catering ? <CheckOutlined /> : <CloseOutlined />}
          </Col>
        </Row>
      </div>
          
    </SpaceDetailWrapper>
  );
};
