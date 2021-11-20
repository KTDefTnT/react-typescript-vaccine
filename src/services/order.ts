import request from '@/core/utils/request';

// 获取当前预约列表信息
export async function getOrderList(): Promise<any> {
  return request('/api/orderList');
}

// 根据orderId获取当前的预约信息
export async function getOrderDetailById(orderId: string): Promise<any> {
  return request('/api/getDetailByOrderId', {
    method: 'POST',
    data: { orderId },
  });
}
