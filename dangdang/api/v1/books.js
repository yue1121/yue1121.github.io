var express = require('express');
var router = express.Router();
var fs = require('fs');

// 获取数据
router.get('/all_data/:type?',(req,res)=>{
  var type = req.params.type;
  fs.readFile(`./data/book_${type}.json`,(err,data)=>{
    if(err){
      console.log(err);
      res.json({
        status:'n',
        msg:'获取数据失败'
      })
    }
    else{
      // setTimeout(function () {
      //   res.json({
      //     status:'y',
      //     msg:'获取数据成功',
      //     data:data.toString()
      //   })
      // }, 5000);
      res.json({
        status:'y',
        msg:'获取数据成功',
        data:data.toString()
      })
    }
  })
})

// 创建数据
router.post('/create',(req,res)=>{
  console.log(req.body);
  res.json({
    status:'y',
    msg:'插入数据成功',
    info:'操作成功'
  })
})

module.exports = router;
