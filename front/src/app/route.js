export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'src/app/template.html',
        });
}