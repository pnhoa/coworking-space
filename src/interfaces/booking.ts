export enum Status {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    BOOKED = 'BOOKED',
    CANCELLED = 'CANCELLED'
  }
  
  export interface Booking {
    id: number
    createdDate?: string
    modifiedDate?: string
    createdBy: string
    modifiedBy?: string
    name: string
    email: string
    companyName?: string
    phoneNumber: string
    numberOfPeople: number
    totalPrice: number
    startDate: Date
    endDate: Date
    numberTimePerUnit: number
    note?: string
    spaceId: number
    status: Status
    userId: number
    subSpaceId: number
    subSpaceTitle?: string
    subSpaceImage?: string
  }

  export interface CancelPayload {
    userId: number;
    status: Status;
  }

  export const BOOKING_STATUS = [
    {
      value: Status.PENDING,
      text: 'Pending',
      color: 'orange',
      colorText: '#fa8c16',
      backgroundColor: '#fff7e6',
    },
    {
      value: Status.COMPLETED,
      text: 'Completed',
      color: 'green',
      colorText: '#52c41a',
      backgroundColor: '#f6ffed',
    },
    {
      value: Status.BOOKED,
      text: 'Booked',
      color: 'pink',
      colorText: '#F75D81',
      backgroundColor: '#ffefff',
    },
    {
      value: Status.CANCELLED,
      text: 'Cancelled',
      color: 'violet',
      colorText: '#ff0000',
      backgroundColor: '#e0e0ff',
    },
  ];

  export const PAID_SPACE_CONST = [
    {
      value: false,
      text: 'No',
      color: 'red',
      colorText: '#F75D81',
      backgroundColor: '#ffefff',
    },
    {
      value: true,
      text: 'Yes',
      color: 'green',
      colorText: '#52c41a',
      backgroundColor: '#f6ffed',
    },
  ]
  
  export const APPROVED_CONST = [
    {
      value: false,
      text: 'Not approved',
      color: 'red',
      colorText: '#F75D81',
      backgroundColor: '#ffefff',
    },
    {
      value: true,
      text: 'Approved',
      color: 'green',
      colorText: '#52c41a',
      backgroundColor: '#f6ffed',
    },
  ]