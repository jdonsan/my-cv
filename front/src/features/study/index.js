import route from './route';
import controller from './controller';

angular
    .module('app.features.study', [])
    .config(route)
    .controller('StudyController', controller);