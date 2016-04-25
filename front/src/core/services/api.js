export default function($http, constants) {
    'ngInject'

    this.get = function(endpoint) {
        return $http.get(constants.Url + endpoint);
    }
}