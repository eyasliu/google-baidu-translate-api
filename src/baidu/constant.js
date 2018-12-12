const url = "https://fanyi.baidu.com";

module.exports = {
    FANYI_BAIDU_URL: url,
    transapi: {
        v1: `${url}/transapi`,
        v2: `${url}/v2transapi`,
        langdetect: `${url}/langdetect`,
        multitransapi: `${url}/multitransapi`,
    },
    COOKIES: "cookies",
    PARAMS: "params"
};