import { SpaceDetail } from "interfaces"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import spaceApi from "api/spaceApi"
import RestShow from "components/RestLayout/RestShow"
import SpaceOverviewDetailInfo from "./components/SpaceOverview"
import SpaceDescriptionDetailInfo from "./components/SpaceDescription"
import SpaceAddressDetailInfo from "./components/SpaceAddress"
import SpaceContactDetailInfo from "./components/SpaceContact"
import SpaceAmenityDetailInfo from "./components/SpaceAmenity"
import SpacePaymentTable from "./components/SpacePayment"
import ServiceSpaceDetailInfo from "containers/SpaceDetail/components/ServiceSpaceInfo"
import SubSpaceTable from "./components/ServiceSpace/SubSpaceTable"
import CollapseWrapper from "components/common/CollapseWrapper"
import SpaceWrapper from './style'
import { Loading } from "components/Loading"
import NavBar from "components/Header"
import { Footer } from 'components/Footer'
import { notification, Space } from "antd"


export const YourSpaceDetail = () => {

    const [loading, setLoading] = useState(true);
    const [record, setRecord] = useState<SpaceDetail>()
    const { id } = useParams()
    const navigate = useNavigate()
    const customerId = Number(localStorage.getItem('id'));

    useEffect(() => {
        (async () => {
          if(customerId === 0){
            setTimeout(() => {
              notification.error({ message:"Please login!!"})
              navigate('/login') }, 500);
            
          } else {
            try {
              const data = await  spaceApi.getById(Number(id))
              if(customerId !== data.userId) {
                setTimeout(() => {
                  notification.error({message: "Not found space"})
                  navigate(-1) }, 500);
              }
              setRecord(data)
              setLoading(false);
            } catch (error) {
              setTimeout(() => {
                notification.error({message: "Not found space"})
                navigate(-1) }, 500);
            }
            
          }
          
        })()
      }, [id])

      const formatBreadcrumb = (record: SpaceDetail) => [
        {
          title: 'Spaces',
          path: '/your-space',
        },
        {
          title: `Space#${record?.id}` || '',
        },
      ]
    
      return (
        <SpaceWrapper>
      {loading ? (
        <Loading />
      ) : (
        <><>
                <NavBar />
                <div className='container'>
                <RestShow resource='Space' formatBreadcrumb={formatBreadcrumb} record={record}>
                  <SpaceOverviewDetailInfo />
                  <Space></Space>
                  <SpaceDescriptionDetailInfo />
                  <CollapseWrapper leftComponent={<SpaceAddressDetailInfo />} rightComponent={<SpaceContactDetailInfo />} leftSpan={12} rightSpan={12} />
                  <SpaceAmenityDetailInfo />

                  <SpacePaymentTable />

                  {(record?.serviceSpaces)?.map((serviceSpace) => {
                    return (<CollapseWrapper key={serviceSpace.id} leftComponent={<ServiceSpaceDetailInfo key={serviceSpace.id} serviceSpace={serviceSpace} />}
                      rightComponent={<SubSpaceTable key={serviceSpace.id} serviceSpace={serviceSpace} />} leftSpan={6} rightSpan={18} />)
                  })}

                </RestShow>
                </div>
              </><Footer /></>

    )}
    </SpaceWrapper>
    )
};
