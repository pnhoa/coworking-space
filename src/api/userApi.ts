import { notification } from 'antd';
import { ChangePasswordPayload, RegisterPayLoad, User } from 'interfaces';
import axiosClient from './axiosClient';
export const userApi = {
  async getById(id: number): Promise<User> {
    return await axiosClient.get(`/customers/${id}`);
  },
  changePassword(payload: ChangePasswordPayload) {
    return axiosClient.post('/password/edit', payload);
  },

  async update(id: number, data: RegisterPayLoad)  {
    const formData = new FormData()
    if(data.profilePicture != null && data.profilePicture.startsWith('blob') ) {
      let blob = await fetch(data.profilePicture).then(r => r.blob());
      const myFile = new File([blob], "image." + (blob.type).replace("image/", ""), {
        type: blob.type,
      });
      formData.append("file", myFile)
    }
    data.profilePicture = undefined
    formData.append('theCustomerDto',
      new Blob([JSON.stringify(data)], { 
        type: 'application/json'
      }));

     await fetch(`${process.env.REACT_APP_URL}/customers/${id}`, {
      method: 'put',
      body: formData,
      headers: {
                "Authorization":  `Bearer ${localStorage.getItem('token')}`
                },
    
    }).then(function (response) {
      notification.info({ message: "Update employee successfully!" })
    })
    .catch(function (response) {
      notification.error({ message: response.message })
    });
  },
};
