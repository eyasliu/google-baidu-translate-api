# Google & Baidu 翻译 api

免费 & 无限制的google & baidu 翻译 api

## 安装

```
npm install google-baidu-translate-api
```

## 使用示例

```js
const translate = require('google-baidu-translate-api')

translate('我是谁', 'en').then(res => {
  console.log(res.dist)
  // who am I

  console.log(res)
  // { 
  //   type: 'google',
  //   from: 'zh-CN',
  //   to: 'en',
  //   src: '我是谁',
  //   dist: 'who am I',
  //   targets: [ 'who am I', 'who I am', 'Who am I?' ]
  // }
})

translate.google('我是谁', 'en').then(console.log)
translate.baidu('我是谁', 'en').then(console.log)
```

## API

#### translate()

先尝试使用 google 翻译，如果失败再使用 baidu 翻译

参数如下:

```js
translate(
  word: string, // [必填] 要翻译的文字
  to: string, // [必填] 要翻译成什么语言
  from: string // 原本字符的语言，默认 auto 自动识别
): Promise<{
  type: string, // 服务 google | baidu
  from: string, // 原本字符的语言
  to: string, // 翻译后的语言
  src: string, // 原本被翻译的字符
  dist: string, // 翻译后字符
  targets: string[] // 翻译后字符的其他相似项
}>
```

#### translate.google()

使用 google 翻译，参数同 `translate()`

#### translate.baidu()

使用 baidu 翻译，参数同 `translate()`

#### 支持的语言

baidu 支持的语言列表：http://api.fanyi.baidu.com/api/trans/product/apidoc#languageList
google 支持的语言列表：https://cloud.google.com/translate/docs/languages

## 思路

使用 http 请求获取 google 翻译 和 baidu 翻译页面，模拟页面翻译，google 翻译的host 默认为 `translate.google.cn`，无需梯子

## Thanks

google-translate-api: https://github.com/matheuss/google-translate-api
baidu-translate-api: https://github.com/TimLuo465/baidu-translate-api

本项目基于以上两个项目扩展，代码大部分来自于以上两个项目