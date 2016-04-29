export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('app.jobs', {
            url: '/jobs',
            templateUrl: 'src/features/jobs/template.html',
        });
}