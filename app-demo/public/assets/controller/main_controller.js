// angular是一个全局函数
// 只要我引入了angular模块 这个全局函数就会生效
// angular.module() 如果只写一个参数 那么是获得模块
//  写两个参数为定义模块,
//  参数二的内容是一个数组 表示依赖项即需要注入模块的功能插件
// var tools = require('../common/tools');
// console.dir(tools);
angular.module('app').controller('mainController', ['$scope','commonService', function($scope,c_s) {
    $scope.title = '这里是main控制器-这个会自动刷新的...';
    // console.log(tools.convertFirstCharToUpper('tom'));
    // console.log(tools.removeSameFromArr([1,2,3,4,1,2,11,7,9,1]));
    $scope.data = [];
    c_s.getBooksData('ertong',(isOk,res)=>{
      if(isOk){
        // $scope.data = res.data.data;
        // console.dir(angular.fromJson(res.data.data));
        // 对返回的数据做处理 格式化为json
        $scope.data = angular.fromJson(res.data.data);
      }
      else{
        alert('调用服务失败!');
      }
    })

    c_s.saveBookData({title:'小王子',author:'未知'},(isOk,res)=>{
      console.dir(res);
    })
}])
