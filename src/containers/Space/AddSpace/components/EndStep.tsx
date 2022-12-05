
import { Button, notification } from "antd";
import spaceApi from "api/spaceApi";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { operationHourFunc, operationHourFuncForChecked } from "utils/common";


interface Props {
    overview: any;
    description: any;
    contact: any;
    address: any;
    amentity: any;
    operationHour: any;
    images: any;
    service: any;
  }

export const EndStep: FC<Props> = ({overview, description, contact, address,
                                    amentity, operationHour, images, service }) => {

     const navigate = useNavigate()

    let operationHourConvert ;
    if(operationHour.checked === undefined || operationHour.checked === false) {
      operationHourConvert = operationHourFuncForChecked(operationHour)
    } else {
      operationHourConvert = operationHourFunc(operationHour)
    }
    const descriptionConvert = {
        "shortDescription": description.shortDescription,
        "description": description.description,
        "openingDate": description.openingDate.format("YYYY-MM-DD")
    }
   
    const space = {
        "name": overview.name,
        "minPrice": Number(overview.minPrice),
        "maxPrice": Number(overview.maxPrice),
        "largeImage": images.largeImage,
        "unit": overview.unit,
        "price": Number(overview.price),
        "categoryId": Number(overview.categoryId),
        "numberOfRoom": Number(overview.numberOfRoom),
        "userId": Number(localStorage.getItem("id")),
        "spaceDescriptionDTO": descriptionConvert,
        "spaceContactDTO": contact,
        "spaceAmenityDTO": amentity,
        "spaceAddressDTO": address,
        "spaceOperationTimeDTOs": operationHourConvert,
        "serviceSpaceDTOs": service.serviceSpaceDTOs,
        "imageUrls": images.imageUrls
    }
    

    const handleAddSpace = async () => {
        try {
            const formData = await spaceApi.addSpace(space)
            await fetch(`${process.env.REACT_APP_URL}/spaces`, {
              method: 'post',
              body: formData,
              }).then( (response) =>  response.json())
              .then((data) => {
                if(data.status === '500 Internal Server Error') {
                  notification.error({
                    message: 'Failed add space',
                  });
                } else {
                  setTimeout(() => {
                    notification.success({ message:"Add space successfully!!!"})
                    navigate('/your-space') }, 500);
                }
              })
              .catch(function (response) {
                notification.error({ message: response.message })
              })
            
          } catch (error: any) {
            notification.error({
              message: `${error.message}`,
            });
          }
    }

    return (
        <div>
           <Button type='primary' htmlType='submit' style={{ width: '20%', backgroundColor:'#08966b' }} onClick={handleAddSpace}>
               Add your space
            </Button>
        </div>
    );

}