import route from './route';
import controller from './controller';

angular
    .module('app.features.jobs', ['ui.router'])
    .config(route)
    .controller('JobsController', controller);