import { Col, Row, Steps } from 'antd';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';
import { AddressStep } from './components/AddressStep';
import { AmentityStep } from './components/AmentityStep';
import { ContactStep } from './components/ContactStep';
import { DescriptionStep } from './components/DescriptionStep';
import { ImageStep } from './components/ImageStep';
import { OperationHourStep } from './components/OperationHourStep';
import { OverviewStep } from './components/OverviewStep';
import { ServiceStep } from './components/ServiceStep';
import SpaceWrapper from './style';


export const AddSpace = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(false);

      } catch (error) {
      }
    })();
  }, []);



  const [current, setCurrent] = useState(0);
  const [description, setDescription] = useState(null);
  const [overview, setOverview] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [amentity, setAmentity] = useState(null);
  const [operationHour, setOperationHour] = useState(null);
  const [images, setImages] = useState(null);
  const [service, setService] = useState(null);

  const isStepDisabled = (stepNumber: any) => {
    switch(stepNumber) {
      case 0:
        return false; 

      case 1:
        return overview === null; 
      case 2:
        return overview === null || description === null;  
        
      case 3:
        return overview === null || description === null || contact === null; 

      case 4:
        return overview === null || description === null || contact === null || address === null; 
      case 5:
        return overview === null || description === null || contact === null || address === null || amentity === null; 

      case 6:
          return overview === null || description === null || contact === null || address === null || amentity === null || operationHour === null; 
      case 7:
          return overview === null || description === null || contact === null || address === null || amentity === null || operationHour === null
          || images === null; 

      case 8:
          return overview === null || description === null || contact === null || address === null || amentity === null || operationHour === null
            || images === null || service === null; 

      default:
        return false;

    }
  }
  const onSuccessOverviewFrom = (values: any) => {
      setOverview(values)
      setCurrent(1)
  }
  const onSuccessDescriptionFrom = (values: any) => {
    setDescription(values)
    setCurrent(2)
  }
  const onSuccessContactFrom = (values: any) => {
    setContact(values)
    setCurrent(3)
  }

  const onSuccessAddressFrom = (values: any) => {
    setAddress(values)
    setCurrent(4)
  }

  const onSuccessAmentityFrom = (values: any) => {
    setAmentity(values)
    setCurrent(5)
  }

  const onSuccessOperationHourFrom = (values: any) => {
    setOperationHour(values)
    setCurrent(6)
  }
  const onSuccessImageFrom = (values: any) => {
    console.log(values)
    setImages(values)
    setCurrent(7)
  }

  const onSuccessServiceFrom = (values: any) => {
    console.log(values)
    setService(values)
    setCurrent(8)
  }
  const forms = [
    <OverviewStep data={overview} onSuccess={onSuccessOverviewFrom}  />,
    <DescriptionStep data={description} onSuccess={onSuccessDescriptionFrom}/>,
    <ContactStep data={contact} onSuccess={onSuccessContactFrom}/>,
    <AddressStep data={address} onSuccess={onSuccessAddressFrom}/>,
    <AmentityStep data={amentity} onSuccess={onSuccessAmentityFrom}/>,
    <OperationHourStep data={operationHour} onSuccess={onSuccessOperationHourFrom}/>,
    <ImageStep data={images} onSuccess={onSuccessImageFrom}/>,
    <ServiceStep data={service} onSuccess={onSuccessServiceFrom}/>,
  ]


  return (
    <SpaceWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          
          <div className='container'>
          <h1 className='title'>ADD YOUR SPACE</h1>
            <Row justify='center'>
              <Col span={4}>
                <Steps

                  direction="vertical"
                  current={current}
                  onChange={setCurrent}
                        
                > 
                  <Steps.Step disabled={isStepDisabled(0)} title="Overview"  ></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(1)} title="Description"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(2)} title="Contact"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(3)} title="Address"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(4)} title="Amentity"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(5)}  title="Operation Hours"></Steps.Step>
                  <Steps.Step  title="Photos"></Steps.Step>
                  <Steps.Step  title="Service"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(8)} title="End"></Steps.Step>
                </Steps>
              </Col>
              <Col span={20}>
                {forms[current]}
              </Col>
            </Row>
          </div>

          <Footer />
        </>
      )}
    </SpaceWrapper>
  );
};


