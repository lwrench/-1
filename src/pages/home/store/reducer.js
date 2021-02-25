import {} from './actionTypes';

const initState = {
  articleList: [
    {
      id: 1,
      title: '今年我读了四个开源项目的源码，来分享下心得',
      desc:
        'Hola，我是 yes。 今年来看了 RocketMQ、Kafka、Dubbo 、Tomcat的源码，之前也有读者询问过如何读源码，索性就来分...',
      img:
        'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c245b917d644ac093b2c622c1d2bffc~tplv-k3u1fbpfcp-watermark.image',
    },
    {
      id: 2,
      title: '今年我读了四个开源项目的源码，来分享下心得',
      desc:
        'Hola，我是 yes。 今年来看了 RocketMQ、Kafka、Dubbo 、Tomcat的源码，之前也有读者询问过如何读源码，索性就来分...',
      img:
        'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c245b917d644ac093b2c622c1d2bffc~tplv-k3u1fbpfcp-watermark.image',
    },
    {
      id: 3,
      title: '今年我读了四个开源项目的源码，来分享下心得',
      desc:
        'Hola，我是 yes。 今年来看了 RocketMQ、Kafka、Dubbo 、Tomcat的源码，之前也有读者询问过如何读源码，索性就来分...',
      img:
        'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c245b917d644ac093b2c622c1d2bffc~tplv-k3u1fbpfcp-watermark.image',
    },
    {
      id: 4,
      title: '今年我读了四个开源项目的源码，来分享下心得',
      desc:
        'Hola，我是 yes。 今年来看了 RocketMQ、Kafka、Dubbo 、Tomcat的源码，之前也有读者询问过如何读源码，索性就来分...',
      img:
        'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c245b917d644ac093b2c622c1d2bffc~tplv-k3u1fbpfcp-watermark.image',
    },
  ],
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default homeReducer;
