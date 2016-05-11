export default function ($stateProvider) {
    'ngInject'
        
    $stateProvider
        .state('app.contact', {
            url: '/contact',
            templateUrl: 'src/features/contact/template.html',
            controller: 'ContactController as cc'
        });
}