import proxyMiddleware from 'http-proxy-middleware';

export default () => [
  proxyMiddleware('/api/instagram/v1', {
    target: 'https://api.instagram.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api/instagram/v1': '/v1',
    },
  }),
];
