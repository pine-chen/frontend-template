import { AxiosInstance } from 'axios';
import { request as http } from '@/utils/request';
import { IUser } from '@/feature/home/home-template.dto';

export class User {
  // 回调内对数据进行处理
  static getUser = () => http<AxiosInstance>({
    method: 'get',
    url: '/api/list'
  }).then((res) => res);

  static addUser = (params:IUser) => http<AxiosInstance>({
    method: 'post',
    url: '/api/login',
    data: params
  }).then((res) => res);

  static deleteUser = (id:string) => http<AxiosInstance>({
    method: 'delete',
    url: '/api/list',
    data: id
  }).then((res) => res);
}
