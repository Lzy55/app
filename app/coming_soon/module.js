(function(angular){

    //����Ժ����ӳģ��
    //1�����ȴ���һ��ģ��
    angular.module('moviecat.coming_soon',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            //2������·��
            //���·�ɲ���Ϊin_theaters
            $routeProvider.when('/coming_soon',{
                //ָ��ģ���·��������ʲôҳ��ṹȥ����
                //����url����ǰĿ¼����Ŀ¼app�ļ��У����������������in_theaters����
                templateUrl:'./coming_soon/view.html',
                //ָ������Ŀ�����r
                controller:'ComingSoonController'
            });
        }])
        .controller('ComingSoonController',['$scope',function($scope){
                //�����Ȳ�ʵ��

        }]);
})(angular);