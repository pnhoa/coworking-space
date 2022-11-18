import { Col, Row, Steps } from 'antd';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';
import { DescriptionStep } from './components/DescriptionStep';
import { OverviewStep } from './components/OverviewStep';
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

  const isStepDisabled = (stepNumber: any) => {
    if(stepNumber === 0) {
      return false;
    }
    if(stepNumber === 1) {
      return overview === null;
    }
    if(stepNumber === 2) {
      return overview === null || description === null;
    }
  }
  const onSuccessOverviewFrom = (values: any) => {
      console.log(values)
      setOverview(values)
      setCurrent(1)
  }
  const onSuccessDescriptionFrom = (values: any) => {
    console.log(values)
    setDescription(values)
    setCurrent(2)
}
  const forms = [
    <OverviewStep data={overview} onSuccess={onSuccessOverviewFrom}  />,
    <DescriptionStep data={description} onSuccess={onSuccessDescriptionFrom}/>
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
              <Col span={6}>
                <Steps

                  direction="vertical"
                  current={current}
                  onChange={setCurrent}
                        
                > 
                  <Steps.Step disabled={isStepDisabled(0)} title="Overview"  ></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(1)} title="Description"></Steps.Step>
                  <Steps.Step disabled={isStepDisabled(2)} title="Address"></Steps.Step>
                </Steps>
              </Col>
              <Col span={18}>
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


