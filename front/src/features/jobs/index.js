import route from './route';
import controller from './controller';
import service from './service';

angular
    .module('app.features.jobs', ['ui.router'])
    .config(route)
    .controller('JobsController', controller)
    .service('$jobs', service);