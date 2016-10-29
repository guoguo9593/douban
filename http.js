/**
 * Created by Administrator on 2016/10/24.
 */
(function(){
    var serviceModule=angular.module('doubanApp.service',[]);
    serviceModule.service('JsonpService',['$window',function($window){
        this.jsonp=function(url,params,fn){
            //https://api.douban.com/v2.movie/in_theaters
            var queryString='?';
            //1.拼接参数
            for(key in params){
                queryString+=key+'='+params[key]+'&';
            }
            //console.log(params);
            //2.生成函数名称
            var funname='my_jsonp'+new Date().getTime();
            queryString+='callback'+'='+funname;
            //3.挂载函数
            $window[funname]=function(data){
                fn(data);
            };
            //4.添加script标签，加载数据，使用（DOM对象）
            var script=$window.document.createElement('script');
            script.src=url+queryString;
            $window.document.body.appendChild(script);
        }
    }]);
})();