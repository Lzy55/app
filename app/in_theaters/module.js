(function(angular){

    //����Ժ����ӳģ��
    //1�����ȴ���һ��ģ��
    angular.module('moviecat.in_theaters',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            //2������·��
            //���·�ɲ���Ϊin_theaters
            $routeProvider.when('/in_theaters',{
                //ָ��ģ���·��������ʲôҳ��ṹȥ����
                //����url����ǰĿ¼����Ŀ¼app�ļ��У����������������in_theaters����
                templateUrl:'./in_theaters/view.html',
                //ָ������Ŀ�����r
                controller:'InTheatersController'
            });
        }])
        .controller('InTheatersController',['$scope',function($scope){
                //�����Ȳ�ʵ��

        }]);
})(angular);