import { Col, Row } from "antd";
import { SubSpaceDetailStyles } from "../SubSpaceDetail/styles";

interface Props {

    supSpaceSelected: number;
  }

export const SubSpaceHeader : React.FC<Props> = ({supSpaceSelected})=> {
    return (
        <SubSpaceDetailStyles>
          <Row className='detail-cart__nav'>
            <Col span={6}>
                Sub Space #{supSpaceSelected} is selected
            </Col>
            <Col span={2}>ID</Col>
            <Col span={4}>Title</Col>
            <Col span={4}>Price</Col>
            <Col span={3}>Max People</Col>
            <Col span={4}>Package</Col>
          </Row>
        </SubSpaceDetailStyles>
      );
}
