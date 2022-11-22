import { Card, Col, Radio, RadioChangeEvent, Row } from "antd";
import servicePackApi from "api/servicePackApi";
import { Footer } from "components/Footer";
import NavBar from "components/Header";
import { Loading } from "components/Loading";
import { ListParams, ServicePack } from "interfaces";
import { parse } from "query-string";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PayPalPayment } from "./components/PayPal";
import { PaymentStyles } from "./styles";


export const PaymentSpace = () => {
    const { search } = useLocation()
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [servicePackId, setServicePackId] = useState(1)
    const [servicePackList, setServicePackList] = useState<ServicePack[]>()

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
          setLoading(true)
          try {
            const servicePacks = await servicePackApi.getAll(queryParams)
            setServicePackList(servicePacks)
          } catch (error) {
            console.log('Failed to fetch service pack list: ', error)
          }
    
          setLoading(false)
        })()
    }, [queryParams])

    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setServicePackId(value);
    };

    return (<>
        {loading ? (
          <Loading />
        ) : (
          <PaymentStyles>
            <NavBar />
            <div className='container'>
              <div className='container__navbar'>
                <h2>Choose a Plan for your Coworking Space:</h2>
              </div>
              <div className='content'>
                <div className='payment-method'>
                    <Radio.Group value={servicePackId} onChange={onChange}>
                        <Row gutter={24}>
                            {servicePackList ? servicePackList.map((item) => (
                                <Col span={8} key={item.id}>
                                    <Radio value={item.id} className='checkbox' ></Radio>
                                    <Card title={item.name} bordered={false}>
                                         {item.price}$ {"/" + item.name}
                                    </Card>
                                </Col>
                            )) : <></>}
                        </Row>
                    </Radio.Group>
                </div>
                <div className='payment-method'>
                  <PayPalPayment spaceId={Number(id)} servicePackId={servicePackId}/>
                </div>
                <div className='detail-content'>
                  
                </div>
              </div>
            </div>
            <Footer />
          </PaymentStyles>
        )}
      </>
    );
  };