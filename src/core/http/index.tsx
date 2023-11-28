import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import Configs from '@Constants/config';

const httpClient: AxiosInstance = axios.create({
  baseURL: Configs.BASE_URL,
  timeout: 8000,
  timeoutErrorMessage: 'İstek zaman aşımına uğradı.',
});

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  return config;
};

const onRequestError = (error: AxiosError): AxiosError => {
  //console.error(`[request error] [${JSON.stringify(error)}]`);
  return error;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  //console.info(`[request response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  //console.log(error.request);
  try {
    const status = error.response?.status;
    // 401 (Yetkilendirme hatası) handle veya refresh token
    if (status === 401) {
    }
    return Promise.reject(error);
  } catch (e) {
    return Promise.reject(e);
  }
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): any => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
const httpService: AxiosInstance = setupInterceptorsTo(httpClient);
export default httpService;
