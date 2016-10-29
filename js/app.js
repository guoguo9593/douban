/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    var doubanApp=angular.module('doubanApp',['ngRoute','doubanApp.listModule']);
    doubanApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
        when('/:category/:page?',{
            templateUrl:'list/list.html',
            controller:'ListCtrl'
        }).
        otherwise({
            redirectTo:'/in_theaters/1'
        })
    }]);
})();