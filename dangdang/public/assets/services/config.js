angular.module('app').service('configService',function(){
  // api请求服务器端数据的根地址
  this.baseUrl = '';

  // 设置http请求的超时时间为10秒
  this.httpTimeOut = 10000;

})
