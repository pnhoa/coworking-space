import { ArrowLeftOutlined } from '@ant-design/icons';
import { Col, Image } from 'antd';
import spaceApi from 'api/spaceApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import LaunchScreen from 'components/LaunchScreen';
import { Loading } from 'components/Loading';
import { SpaceDetail as Space, Space as SpaceOverview } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CommentComponent } from './components/Comment';
import ImageSlider from './components/ImageSlider';
import { SpaceInfor } from './components/SpaceInfo';
import { SpaceRelated } from './components/SpaceRelated';
import { SpaceDetailWrapper } from './styles';

export const SpaceDetail = () => {
  const location = useLocation();
  const [startloading, setStartLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [space, setSpace] = useState({} as Space);
  const [images, setImages] =  useState<string[]>([]);
  const [spaceRelatedList, setSpaceRelatedList] = useState([] as SpaceOverview[]);
  const customerId = localStorage.getItem('id');

  const { id } = useParams();

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
                    <ImageSlider   images={images}  />
                  </Col></div>
                ) : (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img src='../default.png'></img>
                )}
              </div>
              <div className='grid__column5_picture'>
                <div className='spaceTableImage'>
                  <div className='ProductTableRow'>
                    <Image
                      src={ space.largeImage ? space.largeImage : `no-data.jpeg`}
                      alt='image'
                      style={{
                        width: '360px',
                        height: '170px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        marginRight: '15px'
                      }}
                    />
                    <Image
                      src={ space.largeImage ? space.largeImage : `no-data.jpeg`}
                      alt='image'
                      style={{
                        width: '360px',
                        height: '170px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        marginRight: '15px'
                      }}
                    />
                  </div>
                  <div className='ProductTableRow'>
                    <Image
                      src={ space.largeImage ? space.largeImage : `no-data.jpeg`}
                      alt='image'
                      style={{
                        width: '360px',
                        height: '170px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        marginRight: '15px'
                      }}
                    />
                    <Image
                      src={ space.largeImage ? space.largeImage : `no-data.jpeg`}
                      alt='image'
                      style={{
                        width: '360px',
                        height: '173px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        marginRight: '15px'
                      }}
                    />
                  </div>
                </div>  
              </div>
              <div className='space-overview'>
                <SpaceInfor data={space} />
              </div>
              <div className='product-comments'>
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
        </SpaceDetailWrapper>
      )}
    </>
  );
};
