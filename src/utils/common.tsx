import { Tag } from 'antd';
import { APPROVED_CONST, BOOKING_STATUS, Category, HourInDay, MatchSubSpace, PAID_SPACE_CONST, Status, SubSpace } from 'interfaces';
import moment from 'moment';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const formatDate = (text?: string) => {
  if (!text) return null;
  const dateTime = moment(text);
  let formatTime = 'h:mma';
  if (dateTime.minutes() === 0) formatTime = 'ha';
  return dateTime.isSame(moment(), 'year')
    ? dateTime.format(`MMM D, ${formatTime}`)
    : dateTime.format(`MMM D YYYY, ${formatTime}`);
}

export const parserInputNumber = (value: string | undefined): string => {
  return value ? value.replace(/\$\s?|(,*)/g, '') : ''
}

export const formatterNumber = (val: string | undefined) => {
  if (!val) return 0;
  return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}

export const getTotalPriceAndNumberTimePerUnit = (subSpace: SubSpace, matchSubSpace: MatchSubSpace) => {
  let totalCost = 0;
  let numberTimePerUnit = 0;
  if(subSpace.package?.type === 'Hour') {
      var hours = Math.ceil(Math.abs(new Date(matchSubSpace.endDate).getTime() - new Date(matchSubSpace.startDate).getTime()) / 3600000);
      totalCost = hours * subSpace.price
      numberTimePerUnit = hours
  }
  if(subSpace.package?.type === 'Day') {
      var days = Math.ceil(Math.abs(new Date(matchSubSpace.endDate).getTime() - new Date(matchSubSpace.startDate).getTime()) / (3600000 * 24));
      totalCost = days * subSpace.price
      numberTimePerUnit = days
  }
  if(subSpace.package?.type === 'Month') {
      var months = Math.ceil(Math.abs(new Date(matchSubSpace.endDate).getTime() - new Date(matchSubSpace.startDate).getTime()) / (3600000 * 24 * 30));
      totalCost = months * subSpace.price
      numberTimePerUnit = months
  }
  if(subSpace.package?.type === 'Year') {
    var years = Math.ceil(Math.abs(new Date(matchSubSpace.endDate).getTime() - new Date(matchSubSpace.startDate).getTime()) / (3600000 * 24 * 30 * 365));
    totalCost = years * subSpace.price
    numberTimePerUnit = years
}

  return [totalCost, numberTimePerUnit]
}

export const formatBookingStatus = (data: string) => {
  if (!data) return null;
  const restItem = BOOKING_STATUS.find((item) => String(Status[item.value]) === data);
  return <Tag color={restItem?.colorText}>{restItem?.text ? restItem.text : data}</Tag>;
};

export const getHourInDay = () => {
  const hourInDay = new Array<HourInDay>();
  hourInDay.push({key: "0000", value: "12:00 AM"})
  hourInDay.push({key: "0100", value: "01:00 AM"})
  hourInDay.push({key: "0200", value: "02:00 AM"})
  hourInDay.push({key: "0300", value: "03:00 AM"})
  hourInDay.push({key: "0400", value: "04:00 AM"})
  hourInDay.push({key: "0500", value: "05:00 AM"})
  hourInDay.push({key: "0600", value: "06:00 AM"})
  hourInDay.push({key: "0700", value: "07:00 AM"})
  hourInDay.push({key: "0800", value: "08:00 AM"})
  hourInDay.push({key: "0900", value: "09:00 AM"})
  hourInDay.push({key: "1000", value: "10:00 AM"})
  hourInDay.push({key: "1100", value: "11:00 AM"})
  hourInDay.push({key: "1200", value: "12:00 PM"})
  hourInDay.push({key: "1300", value: "01:00 PM"})
  hourInDay.push({key: "1400", value: "02:00 PM"})
  hourInDay.push({key: "1500", value: "03:00 PM"})
  hourInDay.push({key: "1600", value: "04:00 PM"})
  hourInDay.push({key: "1700", value: "05:00 PM"})
  hourInDay.push({key: "1800", value: "06:00 PM"})
  hourInDay.push({key: "1900", value: "07:00 PM"})
  hourInDay.push({key: "2000", value: "08:00 PM"})
  hourInDay.push({key: "2100", value: "09:00 PM"})
  hourInDay.push({key: "2200", value: "10:00 PM"})
  hourInDay.push({key: "2300", value: "11:00 PM"})

  return hourInDay;
}

export const getDayInWeek = () => {
  const dayInWeek = new Array<HourInDay>();
  dayInWeek.push({key: "Mon", value: "Monday"})
  dayInWeek.push({key: "Tue", value: "Tuesday"})
  dayInWeek.push({key: "Wed", value: "Wednesday"})
  dayInWeek.push({key: "Thu", value: "Thurday"})
  dayInWeek.push({key: "Fri", value: "Friday"})
  dayInWeek.push({key: "Sat", value: "Saturday"})
  dayInWeek.push({key: "Sun", value: "Sunday"})

  return dayInWeek;
}

export const operationHourFunc = (operationHour: any) => {
  const operationHourConvert = []
    operationHourConvert.push({
        "day": "Mon",
        "openTime": operationHour.MonStart,
        "closeTime": operationHour.MonEnd
    })
    operationHourConvert.push({
        "day": "Tue",
        "openTime": operationHour.TueStart,
        "closeTime": operationHour.TueEnd
    })
    operationHourConvert.push({
        "day": "Wed",
        "openTime": operationHour.WedStart,
        "closeTime": operationHour.WedEnd
    })
    operationHourConvert.push({
        "day": "Thu",
        "openTime": operationHour.ThuStart,
        "closeTime": operationHour.ThuEnd
    })
    operationHourConvert.push({
        "day": "Fri",
        "openTime": operationHour.FriStart,
        "closeTime": operationHour.FriEnd
    })
    operationHourConvert.push({
        "day": "Sat",
        "openTime": operationHour.SatStart,
        "closeTime": operationHour.SatEnd
    })
    operationHourConvert.push({
        "day": "Sun",
        "openTime": operationHour.SunStart,
        "closeTime": operationHour.SunEnd
    })
    return operationHourConvert;
}

export const formatCategoryById = (categoryId: number, categoryList?: Category[]) => {
  return categoryList?.find((category) => category.id === categoryId)?.name
}

export const formatSpacePaid = (paid: boolean) => {
  const status = PAID_SPACE_CONST.find((item) => item.value === paid)
  return <Tag color={status?.color}>{status?.text}</Tag>
}

export const formatSpaceApproved = (approved: boolean) => {
  const status = APPROVED_CONST.find((item) => item.value === approved)
  return <Tag color={status?.color}>{status?.text}</Tag>
}


export const formatExpiredDate = (text?: string) => {
  if (!text) return null
  const dateTime = moment(text)
  return  dateTime.format(`MMM D YYYY`)
}
