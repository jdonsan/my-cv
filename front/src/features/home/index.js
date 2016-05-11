import route from './route';
import controller from './controller';

angular
    .module('app.features.home', [])
    .config(route)
    .controller('ProfileController', controller);