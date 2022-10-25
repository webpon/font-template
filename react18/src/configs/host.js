const config = {
  mock: {
    // 本地mock数据
    API: '',
  },
  development: {
    // 开发环境接口请求
    API: 'http://httpbin.org',
  },
  test: {
    // 测试环境接口地址
    API: 'http://httpbin.org',
  },
  production: {
    // 正式环境接口地址
    API: 'http://httpbin.org',
  },
};
export default config
