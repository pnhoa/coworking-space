import { EyeOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButtonIcon from '../CustomButtonIcon'

interface Props {
  title?: string
  handleClick?: () => void
  id?: string
}

const ViewButton: FC<Props> = ({ title = 'View', handleClick, id }) => {
  const navigate = useNavigate()

  const handleClickView = () => {
    if (handleClick) handleClick()
    navigate(`${id}/show`)

  }

  return <CustomButtonIcon title={title} handleClick={handleClickView} icon={<EyeOutlined />} />
}

export default ViewButton
