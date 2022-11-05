import { useState } from 'react';
import { ReadMoreStyles } from './styles';

interface Props {
    child: string;
}

const ReadMore =  ({ child }: Props) =>{
    const text = child;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
       <ReadMoreStyles>
            <p className="text-readmore">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? <p> ...read more</p> : <p> show less</p>}
                </span>
            </p>
       </ReadMoreStyles> 
      
    );
};

export default ReadMore