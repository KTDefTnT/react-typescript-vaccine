# umi project
# 文件目录结构
```js
├─mock  mock数据
└─src
  ├─@types  typescript数据格式定义
  ├─components 组件
  ├─core 工具类、公共方法
  ├─layouts  约定式路由时的全局布局文件
  ├─models   dva中模块文件 reducers、effects
  ├─pages  所有路由组件
  ├─services  api接口文件
  └─static  静态文件
      └─css
```
# 项目准备工作
## 移动端适配 .umirc.ts
```js
extraPostCSSPlugins: [
  require('postcss-px-to-viewport')({
    unitToConvert: 'px', //需要转换的单位，默认为"px"
    viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
    viewportHeight: 1334, //视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    propList: ['*'], // 能转化为vw的属性列表
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    fontViewportUnit: 'vw', //字体使用的视口单位
    selectorBlackList: ['.ignore-', '.hairlines', 'am-', 'px-'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    mediaQuery: false, // 允许在媒体查询中转换`px`
    replace: true, //是否直接更换属性值，而不添加备用属性
    exclude: [/\/Stores\/.*.less/, /global.css/, /node_modules/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    landscapeUnit: 'vw', //横屏时使用的单位
    landscapeWidth: 1134, //横屏时使用的视口宽度
  })
]
```
## alias 配置
```js
// 配置路径别名
  alias: {
    core: 'src/core',
    services: 'src/services',
    models: 'src/models',
    types: 'src/@types'
  },
```
## iconfont使用
## mock api
  定义api相关的信息，`'GET /api/getUserInfo'`表示为 **get** 请求，接口地址为 **/api/getUserInfo**。返回的数据则为当前接口返回给客户端的返回内容
```js
import { Request, Response } from 'express';

export default {
  'GET /api/getUserInfo': {
    status: 1,
    name: '焦糖瓜子',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    userId: '001',
  },
  'POST /api/login': (req: Request, res: Response) => {
    const { password, name } = req.body;
    if (password === '123456' && name === 'admin') {
      res.send({
        status: 200,
        name: '焦糖瓜子',
        icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userId: '001',
      });
    } else {
      res.send({
        status: 0,
        msg: '账号或者密码错误！',
      });
    }
  },
};
```
## request封装
  **request** 请求封装，根据后端返回的`state`判断服务器是否出错。若是参与到前后端分离的项目中，需要按照前后端的规范约定，例如：后端返回`show: true,type: 'error'`时，所有接口都需要弹出后端的错误提示信息；前端需要统一在接口上加上 **token**等。则可将其全部封装起来进行统一处理。
```js
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    console.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    console.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});
```
## services
请求接口，返回接口的返回信息
```js
import request from '@/utils/request';

// 获取当前用户
export async function getUserInfo(): Promise<any> {
  return request('/api/getUserInfo');
}
```

## @types 定义类型
```js
// user.ts
import { Effect, Reducer } from 'umi';

export interface  UserModelType {
  namespace: String,
	state: {
		userInfo: Object
	},
	effects: {
		getUserInfo: Effect
	},
	reducers: {
		saveUser: Reducer
	}
}

```
## models
每一个model模块都将被合并到 `connect`,多个model类似于多个`reducer`进行**combineReducer**操作，然后传入给`connect`的`mapStateToProps`作为参数。
举例： models中存在`user.ts`以及`vaccine.ts`,则这两个model中的`state`对象都会作为`mapStateToProps`的参数，分别对应其model的`namespace`。使用：**connect(({ user, vaccine }) => ({ user, vaccine }))(WrappedComponent)**
```js
// user.ts
import { UserModelType } from '@types/user';
import { getUserInfo } from '@/services/user';

const userModel: UserModelType = {
  namespace: 'user',
  state: {
		userInfo: {}
	},
	effects: {
		*getUserInfo(action, { call, put }) {
			const userInfo = yield call(getUserInfo);
			yield put({
				type: 'saveUser',
				payload: { userInfo }
			})
		}
	},
	reducers: {
		saveUser(state, action) {
			return { ...state, ...action.payload };
		}
	}
};

export default userModel;
```

## 获取路由表-自定义navTitle
   提取**routes**作为公共文件，根据pathname去匹配 获取当前match的路由。获得自定义的`route`。根据`route`中的参数`title`来回显路由信息。部分组件需要自定义`navBar` 则可多加参数`hiddenNav`
```js
// util.js
export const getRouteByPath = (
  routes: RoutesState[],
  pathname: string | undefined,
): RoutesState | void => {
  let resultRoute;
  if (!routes || routes.length === 0) return;
  for (let route of routes) {
    // 如果当前命中则终止
    if (route.path === pathname) {
      resultRoute = route;
      break;
    }

    // 深入递归
    resultRoute = route.routes && getRouteByPath(route?.routes, pathname);
  }
  return resultRoute;
};

// BasicLayout/index.tsx
const pathname = location?.pathname;
const route = getRouteByPath(routes, pathname);
return (
  <div className="container">
    {!route?.hiddenNav && (
      <NavBar
        mode="light"
        leftContent={<Icon type="left" />}
        onLeftClick={handleLeftClick}
      >
        {route?.title}
      </NavBar>
    )}
    <section>{children}</section>
    <footer>
      {pathname !== '/login' && <BottomNav pathname={pathname} />}
    </footer>
  </div>
);

```
# 踩坑记录
## sass全局样式
> 项目中使用sass作为预编译css，设置`global.scss`全局样式来定义统一颜色规范时，umi报错： 需要使用合适的loader来chuli当前文件
 解决方法：安装对应的loader，`npm install sass-loader node-sass`, `npm install @umijs/plugin-sass -S`，同时在`.umirc.ts`中进行配置。如果没有安装`plugin-sass`,会报错: `Invalid config key: sass`。最后再执行`npm audit fix`
 ```js
 export default defineConfig({
   ...
   sass: {} // 加入当前选项
 });
 ```
 ## css 别名路径引入踩坑
  `global.scss`中全局引入的`iconfont.css`, 但是在其他文件中再引入`global.scss`时会报错，无法找到`./@static/css/iconfont/iconfont.css`。

  解决办法： 在`alias`的路径之前加上 **~**,这就代表当前路径为`alias`路径，当webpack去解析的时候 会主动找`alias`路径进行拼接
 ```css
/* 错误引入方式 */
@import '@/static/css/iconfont/iconfont.css';
@import '@/global.scss';

/* 正确引入方式 */
@import '~@/static/css/iconfont/iconfont.css';
@import '~@/global.scss';
 ```

## 项目使用彩色iconfont
* 阿里iconfont中，选择Symbol 生成链接
* 在`.umirc.ts`中设置属性`headScripts`
```js
  headScripts: [{ src: 'https://at.alicdn.com/t/font_2928601_j8grnplg68j.js' }],
```
* 创建一个全局SvgIcon组件,展示彩色iconfont
```js
// 核心代码
<svg className="icon iconfont" style={{ width: `${size}px`,height: `${size}px` }} aria-hidden="true">
  <use xlinkHref={`#icon-${iconName}`}></use>
</svg>
```