import { axiosInstance } from '@/shared/axios/instance';

export const sendForm = ({ params, cancelToken }: any) =>
  axiosInstance.get('/', {
    params,
    cancelToken,
    baseURL: '/',
  });
