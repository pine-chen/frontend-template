import { request as http } from '@/service/request';

export class user {
  static getUser = (params:any) => http<any>({
    method: 'get',
    url: '/api/list',
    params
  }).then((res) => res);
}
