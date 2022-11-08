import { Form, notification } from "antd"
import spaceApi from "api/spaceApi"
import ModalCustom from "components/ModalCustom"
import { MatchSubSpace } from "interfaces"
import { ModalForwardRefHandle } from "interfaces/modal"
import React, { useImperativeHandle, useState } from "react"
import { MatchSubSpaceForm } from "./MatchSubSpaceForm"


const MatchSubSpaceModal : React.ForwardRefRenderFunction<ModalForwardRefHandle, unknown> = (
    _props,
    ref, 
  ) => {
    const [form] = Form.useForm()
  
    let data = []
    let matchSubSpace: MatchSubSpace
  
    const [loading, setLoading] = useState(false)
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
      form.resetFields()
    }   
  
    const handleChangePassword = () => {
      form
        .validateFields()
        .then( async ({...values }) => {
          const [startDateMoment, endDateMoment] = values.range_picker
          const startDate = startDateMoment.format("YYYY-MM-DDTHH:mm:SS")
          const endDate = endDateMoment.format("YYYY-MM-DDTHH:mm:SS")
          matchSubSpace  = {
            numberOfPeople: values.numberOfPeople,
            startDate: startDate,
            endDate: endDate,
            spaceId: Number(localStorage.getItem('spaceId'))
          }
          data = await spaceApi.findMatchSubSpace(matchSubSpace)
          
        })
        .then(async (response: any) => {
          if(data.length === 0) {
            notification.warning({message: "Not match any sub space",
            placement: 'bottomRight'})
            setLoading(false)
            form.resetFields()
          } else {
            handleClose()
          }
        })
        .catch((error) => {
          setLoading(false)
          notification.error({ message: error.message })
        })
    }
  
    return (
      <ModalCustom
        title='Find Match Sub Space'
        onCancel={handleClose}
        open={visible} 
        onOk={handleChangePassword}
        okButtonProps={{ loading }}
      >
        <Form form={form} layout='vertical'>
          <MatchSubSpaceForm />
        </Form>
      </ModalCustom>
    )

}

export default React.forwardRef(MatchSubSpaceModal)