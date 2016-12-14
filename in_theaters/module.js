(function(angular){
    //创建院线热映模块
    angular.module('moviecat.in_theaters',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            //配置路由
            $routeProvider.when('/in_theaters',{
                templateUrl:'./in_theaters/view.html',

                controller:'InTheatersController'
            });
        }])
        .controller('InTheatersController',['$scope','$http',function($scope,$http){
                //功能先不实现
            //数据应该是从豆瓣电影提供的api获取的
            //在这里我们模拟了数据请求，已经将数据保存到了本地，请求较快

            //1、angular中是通过$http服务来实现ajax请求的
            $http({
                method:'GET',
                url:'./in_theaters/data.json'
            }).then(function(response){
                //ajax请求成功的函数(类似于我们的success)
                console.log('成功');
                console.log(response);

                //2、数据请求成功后，将数据暴露出去
                $scope.movie = response.data;

            },function(response){
                //请求失败的函数
                console.log('失败');
                console.log(response);
            });

            //2、使用get的方式请求数据
            //$http.get('./in_theaters/data.json')
            //    .then(function(response){
            //            //ajax请求成功的函数(类似于我们的success)
            //            console.log('成功');
            //            console.log(response);
            //
            //            //2、数据请求成功后，将数据暴露出去
            //            $scope.movie = response.data;
            //
            //        },function(response){
            //            //请求失败的函数
            //            console.log('失败');
            //            console.log(response);
            //        });

            //第三种方式  跟之前的形式比较像
            //$http.get('./in_theaters/data.json')
            //    .success(function(reponse){
            //        //返回的数据格式不一样，所以不需要reponse.data
            //        console.log(reponse);
            //        $scope.movie = reponse;
            //    })
            //    .error(function(){})

        }])
})(angular);
