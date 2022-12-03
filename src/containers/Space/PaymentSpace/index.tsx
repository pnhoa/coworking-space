import { Button, Card, Col, Row } from "antd";
import servicePackApi from "api/servicePackApi";
import { Footer } from "components/Footer";
import NavBar from "components/Header";
import { Loading } from "components/Loading";
import { ListParams, ServicePack } from "interfaces";
import { ModalForwardRefHandle } from "interfaces/modal";
import { parse } from "query-string";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PaymentModal from "./components/PaymentModal";
import { PaymentStyles } from "./styles";


export const PaymentSpace = () => {
    const { search } = useLocation()
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [servicePackList, setServicePackList] = useState<ServicePack[]>()
    const paymentModalRef = useRef<ModalForwardRefHandle>(null)

    const queryParams: ListParams = useMemo(() => {
        const params = parse(search)
        return {
          ...params,
          page: 0,
          limit: 20,
        }
      }, [search])


    useEffect(() => {
        (async () => {
          try {
            const servicePacks = await servicePackApi.getAll(queryParams)
            setServicePackList(servicePacks)
          } catch (error) {
            console.log('Failed to fetch service pack list: ', error)
          }
    
          setLoading(false)
        })()
    }, [queryParams])


    const handleClick = (servicePack: ServicePack) => {
      localStorage.setItem("spaceId", Number(id).toString())
      localStorage.setItem("servicePackId", servicePack.id.toString())
      localStorage.setItem("price", servicePack.price.toString())
      paymentModalRef.current && paymentModalRef.current.open()
    }

    return (<>
        {loading ? (
          <Loading />
        ) : (
          <PaymentStyles>
            <NavBar />
            <div className='container'>
              <div className='container__navbar'>
                
              </div>
              <div className='content'>
                <div className='payment-method'>
                <h2 style={{marginBottom: 20}}>Choose a Plan for your Coworking Space:</h2>
                        <Row gutter={24}>
                            {servicePackList ? servicePackList.map((item) => (
                                <Col span={8} key={item.id}>
                                  <div className='home__productitems' onClick={()=> handleClick(item)}>
                                    <Card style={{textAlign: 'center'}} title={item.name} bordered={false}>
                                          {item.price}$
                                          
                                    </Card>
                                    
                                  </div>
                                   
                                </Col>
                            )) : <></>}
                        </Row>

                </div>
                
                <div className='detail-content'>
                  
                </div>
              </div>
            </div>
            <Footer />
            <PaymentModal ref={paymentModalRef}></PaymentModal>
          </PaymentStyles>
        )}
      </>
    );
  };