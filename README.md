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
  ├─services  api文件
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