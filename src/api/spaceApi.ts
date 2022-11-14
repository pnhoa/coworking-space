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

  getById(id: number): Promise<SpaceDetail> {
    const url = `/spaces/${id}`;
    return axiosClient.get(url);
  },

  async findMatchSubSpace(payload: MatchSubSpace) {
    const data : SubSpace[] = await axiosClient.post('/spaces/find', JSON.stringify(payload));

    return data
  },

  bookingSubSpace(payload: any) {
    console.log(JSON.stringify(payload))
    return axiosClient.post('/bookings', JSON.stringify(payload));
  },
  
};
export default spaceApi;
