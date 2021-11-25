import { Request, Response } from 'express';

export default {
  'GET /api/getUserInfo': {
    status: 1,
    data: {
      name: '焦糖瓜子',
      icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
      userId: '001',
      phone: '1569877333',
    },
  },
  'GET /api/getUserAddress': {
    name: '焦糖瓜子',
    phone: '1569877333',
    address: '广东省广州市番禺区',
  },
  'GET /api/members': {
    status: 1,
    data: [
      {
        name: '焦糖瓜子',
        icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userId: '001',
        phone: '1569877333',
      },
      {
        name: '李萌萌',
        icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userId: '002',
        phone: '18865434444',
      },
      {
        name: '糖糖',
        icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userId: '003',
        phone: '13655553333',
      },
    ],
  },
  'POST /api/login': (req: Request, res: Response) => {
    const { password, name } = req.body;
    if (password === '123456' && name === 'admin') {
      res.send({
        status: 1,
        data: {
          name: '焦糖瓜子',
          icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
          userId: '001',
          phone: '1569877333',
        },
      });
    } else {
      res.send({
        status: 0,
        msg: '账号或者密码错误！',
      });
    }
  },
};
