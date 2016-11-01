var tools = {};
/**
 * 把单词的首字母转换为大写
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
tools.convertFirstCharToUpper = function(str){
  return str.substring(0,1).toUpperCase()+str.substring(1);
}

/**
 * 去除数组中的重复项
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
tools.removeSameFromArr = function(arr){
  var newArr = [];
  arr.forEach(function(item){
    if(newArr.indexOf(item)<0){
      newArr.push(item);
    }
  })
  return newArr;
}

module.exports = tools;
