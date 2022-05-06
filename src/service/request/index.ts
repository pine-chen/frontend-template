import { ref } from 'vue';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { errorHandler } from '@/service/request/types';
import { userStore } from '@/store';

export const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'api',
  timeout: 10 * 1000 // 请求超时时间
});

request.interceptors.request.use((config) => {
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`;
  }
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response: AxiosResponse) => {
  const dataAxios = response.data;
  const useStore = userStore();
  // 这个状态码是和后端约定的
  const { code, msg } = dataAxios;
  // 根据 code 进行判断
  if (code === undefined) {
    // 如果没有 code 代表这不是项目后端开发的接口
    return dataAxios;
  }
  // 有 code 代表这是一个后端接口 可以进行进一步的判断
  switch (code) {
    case 200:
      // code === 0 代表没有错误
      return dataAxios.data;
    case 401:
      useStore.logout();
      throw Error(msg);
    default:
      // 不是正确的 code
      return '不是正确的code';
  }
}, errorHandler);

export default { request };

export interface RequestConfig {
  successMessage?: string;
  errorMessage?: string;
  immediate?: boolean;
}

export function useRequest<T>(
  axiosConfig: AxiosRequestConfig,
  requestConfig?: RequestConfig
) {
  // 最终返回的数据
  const data = ref<T>();
  // 请求失败返回的 Error 对象
  const error = ref<Error>();
  // 请求状态
  const loading = ref(false);
  // 立即发送请求
  const immediate = requestConfig?.immediate !== false;
  // 终止请求
  const { CancelToken } = axios;
  const { token, cancel } = CancelToken.source();
  // 合并请求配置
  const config = { ...axiosConfig, cancelToken: token };
  // 请求 Promise

  function run() {
    loading.value = true;
    return request<T>(config)
      .then((res: T) => {
        data.value = res;
      })
      .catch((err: Error) => {
        error.value = err;
        if (requestConfig?.errorMessage) {
          throw Error(requestConfig.errorMessage);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }

  const content = new Promise((resolve, reject) => {
    if (immediate) {
      run()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
  return {
    data, error, loading, content, cancel
  };
}
