const google = require('./google')
const baidu = require('./baidu')



function googleTranslate(word, to, from = 'auto') {
  return google(word, {from, to}).then(res => ({
    type: 'google',
    from: res.from,
    to: to,
    // response: res,
    src: res.result.src,
    dist: res.result.dist,
    targets: res.result.targets,
  }))
}

function baiduTranslate(word, to, from = 'auto') {
  return baidu(word, {from, to, keywords: true}).then(res => ({
    type: 'baidu',
    from: res.from,
    to: res.to,
    // response: res,
    src: res.trans_result.src,
    dist: res.trans_result.dst,
    targets: res.trans_result.targets,
  }))
}

module.exports = (...args) => googleTranslate(...args).catch(() => baiduTranslate(...args))
module.exports.google = googleTranslate
module.exports.google.languages = google.languages

module.exports.baidu = baiduTranslate
module.exports.baidu.languages = baidu.language
