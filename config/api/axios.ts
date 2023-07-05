import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options,  }).then((res) => res.data)

export const api = axios.create({
    baseURL: 'https://fe-task-api.mainstack.io',
    timeout: 30000, // 30 seconds
})

// export const baseURL = 'https://storemanagerpin.azurewebsites.net/app'
// export const userToken = 'USERTOKEN';