function getWeatherInfo(weatherData) {
    var url = 'http://apis.baidu.com/apistore/weatherservice/cityinfo';
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(e) {
        // 请求状态
        // console.log(request.readyState);

        // console.log(request.status);
        if (request.readyState == 4) {
            var data = JSON.parse(request.responseText);
            // console.log(data);
            console.dir(data);

            // var div = document.querySelector('#weatherInfo');
            // div.innerHTML = '';
            // for (var key in data.retData) {
            //   var p = document.createElement('p');
            //   p.innerHTML = key + data.retData[key];
            //   div.appendChild(p);
            // }
            var code = data.retData.cityCode;
            var Name = data.retData.cityName;
            getNameCodeInfo(code, Name);
            // document.body.appendChild(div);
        }
    };
    url += "?cityname=" + weatherData;
    request.open('get', url, true);
    request.setRequestHeader('apikey','0f4005fce31520af4cb4e11e5470ef2c');
    request.send();
}

function doSearch() {
    getWeatherInfo(document.querySelector('#cityname').value);
    // getWeatherInfo(document.querySelector('#cityid').wea);
}

function getNameCodeInfo(code, Name) {
  console.log("111"+Name);
    $.ajax({
        url: "http://apis.baidu.com/apistore/weatherservice/recentweathers",
        data: {
            cityname: Name,
            cityid: code
        },
        method: 'get',
        headers: {
            apikey: '0f4005fce31520af4cb4e11e5470ef2c'
        },
        dataType: 'json',
        success: function(res) {
          if (res.errNum == 0) {
            var result = [];
            result = res.retData.history;
            result.push(res.retData.today);
            result = result.concat(res.retData.forecast);
            var content = document.querySelector('#listBody');
            content.innerHTML = template('table',{list:result});
          }else{
            console.log(res);

          }
        },
        error: function(err) {
            console.log(err);
        }
    });
}
