export default function ($rootScope) {
    'ngInject'
    
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, elem) {
            elem.bind('click', function () {
                $rootScope.$broadcast('drawer:toggle');
            });
        }
    }
};