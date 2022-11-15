import { Tag } from 'antd';
import { BOOKING_STATUS, MatchSubSpace, Status, SubSpace } from 'interfaces';
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
