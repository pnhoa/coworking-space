import { SpaceDetail } from "interfaces"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
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


export const YourSpaceDetail = () => {

    const [record, setRecord] = useState<SpaceDetail>()
    const { id } = useParams()

    useEffect(() => {
        ;(async () => {
          const data = await  spaceApi.getById(Number(id))
          setRecord(data)
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
        <RestShow resource='Space' formatBreadcrumb={formatBreadcrumb} record={record}>
          <SpaceOverviewDetailInfo />
          <SpaceDescriptionDetailInfo/>
          <CollapseWrapper leftComponent={<SpaceAddressDetailInfo />} rightComponent={<SpaceContactDetailInfo/>} leftSpan={12} rightSpan={12}/>
          <SpaceAmenityDetailInfo />
    
          <SpacePaymentTable />
          
          {(record?.serviceSpaces)?.map((serviceSpace) => {
            return (<CollapseWrapper key={serviceSpace.id} leftComponent={<ServiceSpaceDetailInfo key={serviceSpace.id} serviceSpace={serviceSpace} />} 
            rightComponent={<SubSpaceTable key={serviceSpace.id} serviceSpace={serviceSpace} />} leftSpan={6} rightSpan={18}/>)
          })}
          
        </RestShow>
        
      )
    }