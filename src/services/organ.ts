import request from '@/core/utils/request';

// 获取当前预约列表信息
export async function getOrganList(): Promise<any> {
  return request('/api/organList');
}

// 获取默认的地址
export async function getCheckedOrgan(): Promise<any> {
  return request('/api/checkedOrgan');
}

// 根据orderId获取当前的预约信息
export async function getDetailByOrganId(organId: string): Promise<any> {
  return request('/api/getDetailByOrganId', {
    method: 'POST',
    data: { organId },
  });
}
