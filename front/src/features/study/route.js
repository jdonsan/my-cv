export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('app.study', {
            url: '/study',
            templateUrl: 'src/features/study/template.html'
        });
}