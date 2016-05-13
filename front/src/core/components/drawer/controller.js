export default function ($scope) {
    'ngInject'
    
    const dr = this;

    dr.active = false;
    dr.options = [{
        link: 'app.home',
        icon: 'account_circle',
        text: 'Perfil',
        active: true
    }, {
        link: 'app.skills',
        icon: 'vpn_key',
        text: 'Conocimientos',
        active: false
    }, {
        link: 'app.jobs',
        icon: 'work',
        text: 'Experiencia',
        active: false
    }, {
        link: 'app.study',
        icon: 'school',
        text: 'Estudios',
        active: false
    }, {
        link: 'app.contact',
        icon: 'rss_feed',
        text: 'Contacto',
        active: false
    }];
    
    dr.activeOption = function (index) {
        dr.options.forEach((option) => option.active = false);
        dr.options[index].active = true;
        dr.active = false;
    };
    
    $scope.$on('drawer:toggle', function () {
        dr.active = !dr.active;
        $scope.$apply();
    });
}