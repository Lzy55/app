(function(angular){
	
// 首页模块
angular.module('moviecat.home',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/home_page',{
			
			// 路径注意 因为这个js文件最终是在index.html中执行的
			// 所以是相对于index.html来计算的路径
			// 所以推荐使用：绝对路径（少用相对路径）
			templateUrl:'./home/view.html'
		});
	}]);

})(angular);