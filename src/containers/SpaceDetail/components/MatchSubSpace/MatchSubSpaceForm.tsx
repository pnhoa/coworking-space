import { DatePicker, Form, InputNumber} from "antd"
import moment from "moment";
import { parserInputNumber } from "utils/common"

const { RangePicker } = DatePicker;

export const MatchSubSpaceForm = () => {
    return (
        <div>
          <Form.Item
            name='numberOfPeople'
            label='How many people is the office for?'
            initialValue="1"
            rules={[{ required: true, message: 'Please enter number of people' }]}
            >
          <InputNumber
            placeholder='Please enter number of people'
            parser={parserInputNumber}
          />
          </Form.Item>
          <Form.Item
            name="range_picker"
            label='Start date and end date'
            rules={[{ required: true, message: 'Please select date' }]}
            >
                <RangePicker
                  disabledDate={(current) => {
                    let customDate = moment().format("YYYY-MM-DD HH:mm:ss");
                    return current && current < moment(customDate, "YYYY-MM-DD HH:mm:ss");
                  }} 
                  showTime={{ format: 'HH:00:00' }}
                  format="YYYY-MM-DD HH:00:00"
                />
          </Form.Item>
      </div>
   )
}