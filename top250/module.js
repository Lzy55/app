(function(angular){

    //创建院线热映模块
    //1、首先创建一个模块
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            //2、配置路由
            //如果路由参数为in_theaters
            $routeProvider.when('/top250',{
                //指定模板的路径，经过什么页面结构去处理
                //根据url，当前目录是主目录app文件夹，所以是在其下面的in_theaters下面
                templateUrl:'./top250/view.html',
                //指定管理的控制器r
                controller:'Top250Controller'
            });
        }])
        .controller('Top250Controller',['$scope',function($scope){
                //功能先不实现

        }]);
})(angular);