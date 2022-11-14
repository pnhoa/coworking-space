import { Col, Image, Radio, RadioChangeEvent, Row } from "antd";
import { SubSpace } from "interfaces";
import { useState } from "react";
import { formatPrice } from "utils/common";
import { SubSpaceHeader } from "../SubSpaceHeader";
import { SubSpaceDetailStyles } from "./styles";


interface Props {
    subSpaceList: SubSpace[];
    onChangeSub: (subSpaceId: number) => void
  }

const SubSpaceDetail: React.FC<Props> = ({ subSpaceList, onChangeSub })=> {

    const [checkedSubSpace, setCheckedSubSpace] = useState(subSpaceList[0].id);


    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        console.log('checked ', value);
        setCheckedSubSpace(value);
        onChangeSub(value)
    };
    


    return (
        <SubSpaceDetailStyles>
            <SubSpaceHeader supSpaceSelected={checkedSubSpace} />
            <>
            <div className='cart-detail'>
                <Radio.Group value={checkedSubSpace} onChange={onChange}>
                    {subSpaceList.map((item) => (
                    <li key={item.id} className='cart-item'>
                        <Row>
                        <Col span={2}>
                            <Radio value={item.id} className='checkbox' ></Radio>
                        </Col>
                        <Col span={4} className='cart-item__info'>
                            <div className='cart-item__thumbnail'>
                            <Image
                                src={`${item.imageUrl}`}
                                alt={item.title}
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '6px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                  }}
                            ></Image>
                            </div>

                        </Col>
                        <Col span={2} className='cart-item__saleprice'>#{item.id}</Col>
                        <Col span={4} className='cart-item__saleprice'>
                            {item.title}
                        </Col>
                        <Col span={4} className='cart-item__saleprice'>
                            {formatPrice(item.price)}
                        </Col>
                        <Col span={3} className='cart-item__saleprice'>
                            {item.numberOfPeople}
                        </Col>
                        <Col span={4} className='cart-item__saleprice'>
                            {item.package?.type}
                        </Col>
                        </Row>
                    </li>
                    ))}
                </Radio.Group>
            </div>
            </>
            
        </ SubSpaceDetailStyles>
    );
}

export default SubSpaceDetail;
