import { Form, notification } from "antd"
import ModalCustom from "components/ModalCustom"
import { MatchSubSpace } from "interfaces"
import { ModalForwardRefHandle } from "interfaces/modal"
import moment from "moment"
import React, { useImperativeHandle, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MatchSubSpaceForm } from "./MatchSubSpaceForm"


const MatchSubSpaceModal : React.ForwardRefRenderFunction<ModalForwardRefHandle, unknown> = (
    _props,
    ref, 
  ) => {
    const [form] = Form.useForm()
  
    const push  = useNavigate()
  
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
        .then(({...values }) => {
          const [startDateMoment, endDateMoment] = values.range_picker
          const startDate = startDateMoment.format("YYYY-MM-DD HH:mm:ss")
          const endDate = endDateMoment.format("YYYY-MM-DD HH:mm:ss")
          const matchSubSpace : MatchSubSpace = {
            numberOfPeople: values.numberOfPeople,
            startDate: startDate,
            endDate: endDate,
            spaceId: 1
          }
          console.log(matchSubSpace)
          setLoading(true)
          
        })
        .then(async (response: any) => {
          notification.success({ message: response.message })
          setLoading(false)
          handleClose()
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
        <Form form={form} layout='vertical' initialValues={{
          range_picker: [
            moment('2022-01-13 08:00:00', "YYYY-MM-DD HH:mm:ss"),
            moment('2022-01-15 08:00:00', "YYYY-MM-DD HH:mm:ss"),
          ],
        }}>
          <MatchSubSpaceForm />
        </Form>
      </ModalCustom>
    )

}

export default React.forwardRef(MatchSubSpaceModal)