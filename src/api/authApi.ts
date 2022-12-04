import { RefreshTokenPayLoad, LogoutPayLoad } from './../interfaces/auth';
import { RefreshTokenRespone } from './../interfaces/common';
import { AuthResponse, LoginPayload, RegisterPayLoad } from 'interfaces';
import axiosClient from './axiosClient';
export const authApi = {
  login(payload: LoginPayload): Promise<AuthResponse> {
    const url = '/auth/signin';
    return axiosClient.post(url, payload);
  },
  
  checkToken(payLoad: RefreshTokenPayLoad): Promise<RefreshTokenRespone> {
    const url = '/auth/refreshtoken';
    return axiosClient.post(url, payLoad);
  },
  logout(payLoad: LogoutPayLoad) {
    const url = '/auth/logout';
    return axiosClient.post(url, payLoad);
  },

  async register(data: RegisterPayLoad) {
    const formData = new FormData()
    if(data.profilePicture != null && data.profilePicture.startsWith('blob') ) {
      let blob = await fetch(data.profilePicture).then(r => r.blob());
      const myFile = new File([blob], "profile." + (blob.type).replace("image/", ""), {
        type: blob.type,
      });
      formData.append("file", myFile)
    }
    data.profilePicture = undefined
    formData.append('customerDto ',
      new Blob([JSON.stringify(data)], { 
        type: 'application/json'
      }));

    return formData;
  },
};
