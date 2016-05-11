export default {
    templateUrl: 'src/core/components/drawer/template.html',
    controller: function ($scope) {
        'ngInject'
        const dr = this;
        
        dr.active = false;

        $scope.$on('drawer:toggle', function () {
            dr.active = !dr.active;
            $scope.$apply();
        });
    }
};