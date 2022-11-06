import { Col, Divider, Row } from 'antd'
import { ServiceSpace } from 'interfaces'
import { FC } from 'react'
import ServiceSpaceInfoStyles from './styles'

interface Props {
  serviceSpace: ServiceSpace
}

const ServiceSpaceDetailInfo: FC<Props> = ({serviceSpace}) => {


  return (
    <ServiceSpaceInfoStyles className='box-wrapper'>

      <div className='box-wrapper-title'>Sub Space {serviceSpace.id}</div>

      <Divider></Divider>
      
      <div className='status-info'>
        <Row gutter={20}>
          <Col span={8} className='fw-500'>Title</Col>
          <Col span={12} >
            {serviceSpace?.title}
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={8} className='fw-500'>Note</Col>
          <Col span={12} >
            {serviceSpace?.note}
          </Col>
        </Row>

      
      </div>

      
    </ServiceSpaceInfoStyles>
  )
}

export default ServiceSpaceDetailInfo
