import { Form, Image, Input } from 'antd';
import { get } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { FormContextCustom } from '../../context/FormContextCustom';

interface Props {
  name: string;
}

const FormUploadImage = ({ name }: Props) => {
  const { record, form } = useContext(FormContextCustom);


  const [tempImageUrl, setTempImageUrl] = useState(record ? get(record, name) : null)
  const [tempObject, setTempObject] = useState("")


  useEffect(() => {
    form.setFields([
      {
        name: name,
        value: tempImageUrl,
      },
    ]);
  }, [tempImageUrl]); // eslint-disable-line

  const handleFileInputChange = (e: any) => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    if(tempObject !== "") {
      window.URL.revokeObjectURL(tempObject)
    }
    setTempObject(url)   
    setTempImageUrl(url)
  };

  return (
    <>
      <Form.Item name={name} noStyle />
      <Input className='mt-10 pointer' type='file' onChange={handleFileInputChange} />
      {tempImageUrl && (
        <div className='flex-center mt-24'>
          <Image
            src={tempImageUrl}
            alt='image'
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '10px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      )}
    </>
  );
};

export default FormUploadImage;
