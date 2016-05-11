export default function ($stateProvider, $urlRouterProvider) {
    'ngInject'
    
    $urlRouterProvider.otherwise('/app/home');
    
    $stateProvider
        .state('app.home', {
            url: '/home',
            templateUrl: 'src/features/home/template.html',
            controller: 'ProfileController as pc'
        });
}