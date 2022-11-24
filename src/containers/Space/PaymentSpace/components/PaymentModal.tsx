import ModalCustom from "components/ModalCustom"
import { ModalForwardRefHandle } from "interfaces/modal"
import React, { useImperativeHandle, useState } from "react"
import { PayPalPayment } from "./PayPal"


const PaymentModal : React.ForwardRefRenderFunction<ModalForwardRefHandle, unknown> = (
    _props,
    ref, 
  ) => {
    let spaceId = Number(localStorage.getItem("spaceId"))
    let servicePackId = Number(localStorage.getItem("servicePackId"))
  
    const [visible, setVisible] = useState<boolean>(false)
  
    useImperativeHandle(
      ref,
      () => ({
        open: () => setVisible(true),
      }),
      []
    )
  
    const handleClose = () => {
      setVisible(false)
    }   
  
  
  
    return (
      <ModalCustom
        title='Payment by paypal'
        onCancel={handleClose}
        visible={visible} footer={false}
      >
        <div className='payment-method'>
            <PayPalPayment spaceId={spaceId} servicePackId={servicePackId}/>
        </div>
      </ModalCustom>
    )

}

export default React.forwardRef(PaymentModal)