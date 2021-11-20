import { Request, Response } from 'express';
import { OrganState } from '@/@types/organ';

const OrganList: OrganState[] = [
  {
    organId: '00000000001',
    organName: '南山区人民医院',
    type: '综合医院&nbasp;三级甲等',
    weekday: ['周一', '周二', '周三', '周四', '周五'],
    time: '9:00~17:00',
    phone: '0755-6467666',
    address: '南山区南新路南山人民医院',
    isChecked: true,
    isFree: true,
    list: [
      {
        name: '全科',
        type: 'info',
      },
      {
        name: '疫苗',
        type: 'primary',
      },
      {
        name: '核酸监测',
        type: 'warning',
      },
    ],
    distance: '900m',
  },
  {
    organId: '00000000001',
    organName: '南山区人民医院',
    type: '综合医院&nbasp;三级甲等',
    weekday: ['周一', '周二', '周三', '周四', '周五'],
    time: '9:00~17:00',
    phone: '0755-6467666',
    address: '南山区南新路南山人民医院',
    isChecked: false,
    isFree: false,
    list: [
      {
        name: '全科',
        type: 'info',
      },
      {
        name: '疫苗',
        type: 'primary',
      },
    ],
    distance: '1公里',
  },
  {
    organId: '00000000001',
    organName: '南山区人民医院',
    type: '综合医院&nbasp;三级甲等',
    weekday: ['周一', '周二', '周三', '周四', '周五'],
    time: '9:00~17:00',
    phone: '0755-6467666',
    address: '南山区南新路南山人民医院',
    isChecked: false,
    isFree: true,
    list: [
      {
        name: '核酸监测',
        type: 'warning',
      },
      {
        name: '入职体检',
        type: 'info',
      },
    ],
    distance: '20公里',
  },
  {
    organId: '00000000001',
    organName: '南山区人民医院',
    type: '综合医院&nbasp;三级甲等',
    weekday: ['周一', '周二', '周三', '周四', '周五'],
    time: '9:00~17:00',
    phone: '0755-6467666',
    address: '南山区南新路南山人民医院',
    isChecked: false,
    isFree: true,
    list: [
      {
        name: '疫苗',
        type: 'primary',
      },
      {
        name: '核酸监测',
        type: 'warning',
      },
      {
        name: '入职体检',
        type: 'info',
      },
    ],
    distance: '3公里',
  },
  {
    organId: '00000000001',
    organName: '南山区人民医院',
    type: '综合医院&nbasp;三级甲等',
    weekday: ['周一', '周二', '周三', '周四', '周五'],
    time: '9:00~17:00',
    phone: '0755-6467666',
    address: '南山区南新路南山人民医院',
    isChecked: true,
    isFree: true,
    list: [
      {
        name: '全科',
        type: 'info',
      },
      {
        name: '疫苗',
        type: 'primary',
      },
      {
        name: '核酸监测',
        type: 'warning',
      },
      {
        name: '入职体检',
        type: 'info',
      },
    ],
    distance: '200m',
  },
];

export default {
  'GET /api/organList': {
    status: 1,
    data: OrganList,
  },
  'GET /api/checkedOrgan': (req: Request, res: Response) => {
    const checkedOrgan = OrganList.filter((organ) => organ.isChecked);
    res.send({
      status: 1,
      data: checkedOrgan.length ? checkedOrgan[0] : {},
    });
  },
  'POST /api/getDetailByOrganId': (req: Request, res: Response) => {
    const { organId } = req.body;
    const selectedOrganItem = OrganList.filter(
      (organ) => organ.organId === organId && !organ.isChecked,
    );
    res.send({
      status: 1,
      data: selectedOrganItem.length ? selectedOrganItem[0] : {},
    });
  },
};
