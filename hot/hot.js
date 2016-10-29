/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    var hotModule=angular.module('doubanApp.hotModule',['doubanApp.service']);
    hotModule.controller('HotCtrl',['$scope','$http','JsonpService','$routeParams','$route',function($scope,$http,JsonpService,$routeParams,$route){
        //$scope.subject= [...];

        $scope.subjects=[];
        //$http.get('data.json').then(function(value){
        //    //console.log(value);
        //    //console.log(value.data);
        //    $scope.subject=value.data.subjects;
        //    $scope.total=value.data.total;
        //
        //},function(err){
        //
        //});

        //计算分页
        var count=10;
        //获取当前的页码
        console.log($routeParams.page);
        var currentPage=parseInt($routeParams.page||1);
        $scope.currentPage=currentPage;
        //计算开始位置
        var start=(currentPage-1)*count;



        JsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{count:count,start:start},function(data){
            $scope.subjects= data.subjects;

            //总的条数
            $scope.total=data.total;

            //共有多少页
            $scope.totalPage=Math.ceil($scope.total/count);
            //$scope.$apply($scope.subjects);
            $scope.$apply();
            //console.log(data);
            //分页
            $scope.hundlePage=function(page){
                if(page<1||page>$scope.totalPage){
                    return;
                }
                $route.updateParams({page:page});
            }
        })

    }]);
})();