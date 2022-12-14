import { ApiResponse, Booking, CancelPayload, ListParams, ListResponse } from 'interfaces';
import axiosClient from './axiosClient';

const bookingApi = {
  async getAll(userId: number, params: ListParams): Promise<ListResponse<Booking>> {
    const data: ApiResponse<Booking> = await axiosClient.get(`/bookings/management/${userId}`, { params })

    return {
      data: data.content,
      pagination: {
        page: data.number + 1,
        limit: data.size,
        total: data.totalElements,
      },
    }
  },

  getById(id: number): Promise<Booking> {
    const url = `/bookings/${id}`
    return axiosClient.get(url)
  },

  updateStatus(data: { status: string; userId: string | null }, bookingId: number): Promise<Booking> {
    const url = `/bookings/status/${bookingId}`
    const token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    return axiosClient.put(url, data, token)
  },

  bookingSubSpace(payload: any) {
    return axiosClient.post('/bookings', JSON.stringify(payload));
  },
  async cancel(id: number, payload: CancelPayload) {
    await axiosClient.put(`/bookings/status/${id}`, { ...payload });
  },

  async getApi(customerId: number, params: ListParams): Promise<ListResponse<Booking>> {
    const data: ApiResponse<Booking> = await axiosClient.get(`/bookings/customers/${customerId}`, {
      params,
    });
    return {
      data: data.content,
      pagination: {
        page: data.number,
        limit: data.size,
        total: data.totalElements,
      },
    };
  },
}

export default bookingApi