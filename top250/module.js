(function(angular){

    //����Ժ����ӳģ��
    //1�����ȴ���һ��ģ��
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            //2������·��
            //���·�ɲ���Ϊin_theaters
            $routeProvider.when('/top250',{
                //ָ��ģ���·��������ʲôҳ��ṹȥ����
                //����url����ǰĿ¼����Ŀ¼app�ļ��У����������������in_theaters����
                templateUrl:'./top250/view.html',
                //ָ������Ŀ�����r
                controller:'Top250Controller'
            });
        }])
        .controller('Top250Controller',['$scope',function($scope){
                //�����Ȳ�ʵ��

        }]);
})(angular);