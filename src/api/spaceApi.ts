import { ApiResponse, ListParams, ListResponse, Space, SpaceDetail } from 'interfaces';
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

  
};
export default spaceApi;
