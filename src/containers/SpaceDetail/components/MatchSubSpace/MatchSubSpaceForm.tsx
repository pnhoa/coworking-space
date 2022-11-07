import { DatePicker, Form, InputNumber} from "antd"
import { parserInputNumber } from "utils/common"

const { RangePicker } = DatePicker;

export const MatchSubSpaceForm = () => {
    return (
        <div>
          <Form.Item
            name='numberOfPeople'
            label='How many people is the office for?'
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
                  showTime={{ format: 'HH:mm:ss' }}
                  format="YYYY-MM-DD HH:mm:ss"
                />
          </Form.Item>
      </div>
   )
}