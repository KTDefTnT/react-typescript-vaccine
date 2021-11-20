import request from '@/core/utils/request';

// 获取当前用户
export async function getUserInfo(): Promise<any> {
  return request('/api/getUserInfo');
}

// 获取成员信息列表
export async function getMemberList(): Promise<any> {
  return request('/api/members');
}
