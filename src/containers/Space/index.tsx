import { notification, Pagination } from 'antd';
import spaceApi from 'api/spaceApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { Space as SpaceI } from 'interfaces';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SpaceList } from './components/SpaceList';
import { SpaceSkeleton } from './components/SpaceSkeleton';
import SpaceWrapper from './style';

export const Space = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [spaceList, setSpaceList] = useState([] as SpaceI[]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 20,
    total: 20,
  });
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false);

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number(params.page) || 0,
      limit: Number(params.limit) || 20,
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        setFilterLoading(true);
        const data = await spaceApi.getAll(queryParams);
        setLoading(false);
        setSpaceList(data.data);
        setPagination(data.pagination);
        setFilterLoading(false);
      } catch (error) {
        notification.error({message: "Failed to fetch space list"})
      }
    })();
  }, [queryParams]);

  const handlePageChange = (page: number) => {
    const filter = {
      ...queryParams,
      page: page - 1,
    };
    navigate(`${location.pathname}?${queryString.stringify(filter)}`);
  };

  return (
    <SpaceWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className='container'>
            {filterLoading ? (
              <SpaceSkeleton />
            ) : (
              <div className='grid'>
                <div className='grid__row'>
                  <SpaceList listData={spaceList} />
                </div>
                <div className='product__pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={pagination.total}
                    defaultPageSize={20}
                    current={pagination.page + 1}
                    style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            )}
          </div>

          <Footer />
        </>
      )}
    </SpaceWrapper>
  );
};
