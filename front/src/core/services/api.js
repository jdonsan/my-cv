export default function($http, constants) {
    'ngInject'

    this.get = function(endpoint) {
        return $http.get(constants.url + endpoint).then(function (response) {
            return response.data;
        });
    }
}