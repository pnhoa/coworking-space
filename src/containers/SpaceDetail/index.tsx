import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Image, notification } from 'antd';
import spaceApi from 'api/spaceApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import LaunchScreen from 'components/LaunchScreen';
import { Loading } from 'components/Loading';
import { SpaceDetail as Space, Space as SpaceOverview } from 'interfaces';
import { ModalForwardRefHandle } from 'interfaces/modal';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { formatPrice } from 'utils/common';
import { CommentComponent } from './components/Comment';
import ServiceSpaceDetailInfo from './components/ServiceSpaceInfo';
import { SpaceAmenity } from './components/SpaceAmenity';
import { SpaceInfor } from './components/SpaceInfo';
import { SpaceRelated } from './components/SpaceRelated';
import { SubSpaceList } from './components/SubSpace';
import   MatchSubSpaceModal from './components/MatchSubSpace';
import { SpaceDetailWrapper } from './styles';

export const SpaceDetail = () => {
  const location = useLocation();
  const [startloading, setStartLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [space, setSpace] = useState({} as Space);
  const [images, setImages] =  useState<string[]>([]);
  const [spaceRelatedList, setSpaceRelatedList] = useState([] as SpaceOverview[]);
  const customerId = localStorage.getItem('id');
  const navigate = useNavigate()

  const { id } = useParams();

  const matchSubSpaceModalRef = useRef<ModalForwardRefHandle>(null)

  const getData = async (spaceId: number, customerId: number) => {
    const data = await spaceApi.getById(spaceId);
    setSpace(data);

    const recommendList = await spaceApi.getAll({ limit: 5, page: 0 });
    setSpaceRelatedList(recommendList.data);

    const images: string[] = [data.largeImage ? data.largeImage : 'no-data.jpeg']
    data?.images.forEach(item => {images.push(item.url)}) 
    setImages(images)
  };


  useEffect(() => {
    (async () => {
      if (id) {
        await getData(Number(id), Number(customerId) || 1);
        setStartLoading(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        await getData(Number(id), Number(customerId) || 1);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleBooking = () => {
    if(Number(customerId) === 0){
      setTimeout(() => {
        notification.error({ message:"Please login!!"})
        navigate('/login') }, 500);
    } else {
      matchSubSpaceModalRef.current && matchSubSpaceModalRef.current.open()
    }
  }

  return (
    <>
      {startloading ? (
        <Loading />
      ) : (
        <SpaceDetailWrapper>
            <NavBar />
            <div className='container_productDetails'>
              <div className='grid__row'>
                <div className='back_btn '>
                    <Link to={'/'} className='btn_back'>
                      <i>
                        <ArrowLeftOutlined />
                      </i>
                      Back
                    </Link>
                </div>
                <div className='grid__column5'>
                  {images.length !== 0 ? (
                    <div className='product_img'>
                    <Col span={36} >
                      <Image
                        src={ images[0] ? images[0] : `no-data.jpeg`}
                        alt='image'
                        style={{
                          width: '720px',
                          height: '360px',
                          borderRadius: '6px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Col></div>
                  ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src='../default.png'></img>
                  )}
                </div>
                <div className='grid__column5_picture'>
                  <div className='spaceTableImage'>           
                    <div className='ProductTableRow'>
                      <Image className='image-detail'
                        src={ images[1] ? images[1] : `no-data.jpeg`}
                        alt='image'
                      />
                      <Image className='image-detail'
                        src={ images[2] ? images[2] : `no-data.jpeg`}
                        alt='image'
                      />
                    </div>
                    <div className='ProductTableRow'>
                      <Image className='image-detail'
                        src={ images[3] ? images[3] : `no-data.jpeg`}
                        alt='image'
                        
                      />
                      {images[4] ?
                        <Image className='image-detail'
                          src={ images[4] ? images[4] : `./default.png`}
                          alt='image'
                        />
                        : <></>}
                    </div>
                  </div> 
                </div>

                <div className='space-detail'>
                  <div className='space-detail-com1'>
                    <div className='space-overview'>
                      <SpaceInfor data={space} />
                    </div>
                    <div className='space-amenity'>
                      <div className='space-amenity-title'>Space Amenities</div>
                      <div className='space-amenity-detail'>
                        <SpaceAmenity data={space} />
                      </div>
                    </div>
                  </div>

                  <div  className='space-detail-com2'>
                    <div className="space-starting-con">Starting at</div>
                    <h5>{formatPrice(space?.price)}/{space.unit}</h5>
                    <Button type='primary' ghost size='large' className='booking-space' onClick={handleBooking} >
                    {' '}
                      BOOKING NOW{' '}
                    </Button>
                  </div>
                </div>

                <div className='space-service'>
                  {(space?.serviceSpaces)?.map((serviceSpace) => {
                      return (
                        <div className='space-service-detail' key={serviceSpace.id}>
                          <div className='space-service-com1'>
                            <ServiceSpaceDetailInfo serviceSpace={serviceSpace} />
                          </div>
                          <div className='space-service-com2' >
                            <SubSpaceList  serviceSpace={serviceSpace} />
                          </div>
                        </div>
                      )
                  })}
                  
                </div>
                
                <div className='space-comments'>
                  <div className='title'>Comment and feedback </div>
                  <CommentComponent spaceId={Number(id)} />
                </div>
                <div className='RelatedWapper'>
                  <SpaceRelated data={spaceRelatedList} />
                </div>
              </div>
            </div>
            <Footer />
            {loading && <LaunchScreen />}
            <MatchSubSpaceModal ref={matchSubSpaceModalRef} />
        </SpaceDetailWrapper>
      )}
    </>
  );
};
