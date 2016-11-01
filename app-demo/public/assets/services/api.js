angular.module('app').factory('commonService', ['$http', 'configService', function($http, c_f) {
    var dal = {};

    /**
     * 想服务器端发送请求数据
     * @param  {[type]} type     [请求的书籍类型]
     * @param  {[type]} callBack [回调函数]
     * @return {[type]}          [description]
     */
    dal.getBooksData = function(type, callBack) {
        $http({
            url: c_f.baseUrl + '/api/books/all_data/' + type,
            method: 'get',
            timeout: c_f.httpTimeOut //设置超时请求时间为3秒
        }).then(function(res) {
            callBack(true, res);
        }).catch(function(err) {
            console.log(err);
            callBack(false, err);
        });
    }

    /**
     * 保存数据
     * @param  {[type]} book     [需要保存的数据]
     * @param  {[type]} callBack [回调函数]
     * @return {[type]}          [description]
     */
    dal.saveBookData = function(book,callBack){
      $http({
        url:c_f.baseUrl + '/api/books/create',
        method:'post',
        data:book,
        timeout:c_f.httpTimeOut
      }).then((res)=>{
        callBack(true,res);
      }).catch((err)=>{
        console.log(err);
        callBack(false,err);
      })
    }
    return dal;
}])
