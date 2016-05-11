import route from './route';
import controller from './controller';

angular
    .module('app.features.contact', [])
    .config(route)
    .controller('ContactController', controller);