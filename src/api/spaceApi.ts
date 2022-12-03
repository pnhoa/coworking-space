import { notification } from 'antd';
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
    return axiosClient.put(`/spaces/payment/${spaceId}/${servicePackId}`);
  },

  async addSpace(data: any) {
    const formData = new FormData()
    if(data.largeImage != null && data.largeImage.startsWith('blob') ) {
      let blob = await fetch(data.largeImage).then(r => r.blob());
      const myFile = new File([blob], "largeImage." + (blob.type).replace("image/", ""), {
        type: blob.type,
      });
      formData.append("largeFile", myFile)
    }
    data.largeImage = undefined
    formData.append('theSpaceDto',
      new Blob([JSON.stringify(data)], { 
        type: 'application/json'
      }));

    await fetch(`${process.env.REACT_APP_URL}/spaces`, {
    method: 'post',
    body: formData,
    }).then(function (response) {
      
    })
    .catch(function (response) {
      notification.error({ message: response.message })
    });
  },

  
};
export default spaceApi;
