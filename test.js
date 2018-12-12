const translate = require('./src')

const word = '我是谁'

translate(word, 'en').then(res => {
  console.log(res.dist)
  console.log(res)
})

translate.google('我是谁', 'ja').then(console.log)
translate.baidu('我是谁', 'cs').then(console.log)