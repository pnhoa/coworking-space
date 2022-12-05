import { RocketOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import spaceApi from 'api/spaceApi'
import { SpaceDetail } from 'interfaces'
import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButtonIcon from '../CustomButtonIcon'

interface Props {
  title?: string
  handleClick?: () => void
  id?: string
}

const PaymentButton: FC<Props> = ({ title = 'Payment', handleClick, id }) => {
  const navigate = useNavigate()
  const [space, setSpace] = useState({} as SpaceDetail);

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await spaceApi.getById(Number(id));
        setSpace(data);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickView = () => {
    if(space.approved) {
      if (handleClick) handleClick()
      navigate(`${id}/payment`)
    } else {
      notification.error({message:"Waiting for admin approved!!!"})
    }
    

  }

  return <CustomButtonIcon title={title} handleClick={handleClickView} icon={<RocketOutlined  />} />
}

export default PaymentButton
