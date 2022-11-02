import { Carousel, Image as ImageAntd } from 'antd'
import { ReactNode, FC } from 'react'

interface Props {
  images: string[]
  className?: string
  extraAction?: ReactNode
}

const ImageSlider: FC<Props> = ({ images, className, extraAction }) => {
  return (
    <Carousel effect="scrollx">

      {images.filter(image => image).map((image) => {
        return (<div key={image}>
          <ImageAntd
              src={ image ? image : `no-data.jpeg`}
              alt='image'
              style={{
                width: '1080px',
                height: '480px',
                borderRadius: '6px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
          />
        </div>)
      })}  
  </Carousel>
  )
}

export default ImageSlider
