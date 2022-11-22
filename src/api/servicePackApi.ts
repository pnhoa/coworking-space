import { ServicePack, ListParams } from 'interfaces'
import axiosClient from './axiosClient'

const servicePackApi = {
  getAll(params?: ListParams): Promise<ServicePack[]> {
    const url = '/servicePacks'
    return axiosClient.get(url, { params })
  },

  getById(id: number): Promise<ServicePack> {
    const url = `/servicePacks/${id}`
    return axiosClient.get(url)
  },
}
export default servicePackApi