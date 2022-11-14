import { MatchSubSpace, SubSpace, User} from "interfaces";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatPrice, getTotalPriceAndNumberTimePerUnit} from "utils/common";
import { BookingStyles } from "../../styles";


interface Props {
    customer?: User;
    matchSubSpace: MatchSubSpace;
    subSpace: SubSpace
  }

export const BookingPrice : React.FC<Props> = ({ customer, matchSubSpace, subSpace }) => {


    const [totalPrice, setTotalPrice] = useState(0);
    const [numberTimePerUnit, setNumberTimePerUnit] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

    let [totalCost, numberTimePerUnit] = [0, 0];
    [totalCost, numberTimePerUnit] = getTotalPriceAndNumberTimePerUnit(subSpace, matchSubSpace)

    setTotalPrice(totalCost);
    setNumberTimePerUnit(numberTimePerUnit);
  }, [subSpace]);

    return (
        <BookingStyles>
        <div className='total-cost'>
          
          <div className='total-cost-item total-cost-detail'>
            <ul className='prices__items'>
            <li className='prices__item'>
                <div className='prices__text'>Sub space: </div>
                <div className='prices__value' style={{fontSize:'18px'}}>{subSpace.title}</div>
              </li>
              <li className='prices__item'>
                <div className='prices__text'>Start date: </div>
                <div className='prices__value'>{formatDate(matchSubSpace.startDate.toString())}</div>
              </li>
              <li className='prices__item'>
                <div className='prices__text'>End date: </div>
                <div className='prices__value'>{formatDate(matchSubSpace.endDate.toString())}</div>
              </li>
              <li className='prices__item'>
                <div className='prices__text'>Number of people: </div>
                <div className='prices__value'>{matchSubSpace.numberOfPeople}</div>
              </li>
            </ul>
            <div className='prices__total'>
              <div className='prices__text'>Total price:</div>
              <div className='prices__value'>
                {formatPrice(subSpace.price)}  *  {numberTimePerUnit} {numberTimePerUnit === 1 ? subSpace.package?.type : subSpace.package?.type + 's'} = {formatPrice(totalPrice)}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
                navigate('/space/checkout', {state:{matchSubSpace: matchSubSpace, customer: customer, subSpace: subSpace, totalPrice: totalPrice, numberTimePerUnit: numberTimePerUnit}})
            }}
          >
            BOOKING
          </button>
          {console.log(matchSubSpace)}
        </div>
      </BookingStyles>
    );
}