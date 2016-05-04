export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('app.skills', {
            url: '/skills',
            templateUrl: 'src/features/skills/template.html',
            controller:'SkillsController as sc'
        });
}