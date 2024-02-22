import axios, { AxiosError } from 'axios'
import { Platform } from 'react-native'

const axiosInstance = axios.create({
  // @todo deploy backend 
  baseURL: process.env.EXPO_PUBLIC_API_URL
})


axiosInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (err: AxiosError<any>) => {
    const res = err.response
    const msg = res?.data

    return Promise.reject(msg)
  },
)
export default axiosInstance
