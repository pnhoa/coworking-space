import { ApiResponse, ListParams, ListResponse, MatchSubSpace, Space, SpaceDetail, SubSpace } from 'interfaces';
import axiosClient from './axiosClient';

const spaceApi = {
  async getAll(params: ListParams): Promise<ListResponse<Space>> {
    const data: ApiResponse<Space> = await axiosClient.get('/spaces', { params });

    return {
      data: data.content,
      pagination: {
        page: data.number,
        limit: data.size,
        total: data.totalElements,
      },
    };
  },

  async getAllByCustomerId(customerId: number, params: ListParams): Promise<ListResponse<Space>> {
    const data: ApiResponse<Space> = await axiosClient.get(`/spaces/customers/${customerId}`, {
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

  getById(id: number): Promise<SpaceDetail> {
    const url = `/spaces/${id}`;
    return axiosClient.get(url);
  },

  async findMatchSubSpace(payload: MatchSubSpace) {
    const data : SubSpace[] = await axiosClient.post('/spaces/find', JSON.stringify(payload));

    return data
  },

  paymentSpace(spaceId: number, servicePackId: number) {
    console.log(spaceId + "-" + servicePackId)
    return axiosClient.put(`/spaces/payment/${spaceId}/${servicePackId}`);
  },

  
};
export default spaceApi;
