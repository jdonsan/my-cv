import controller from './controller';
import service from './service';

angular
    .module('app.jobs', [])
    .controller('JobsController', controller)
    .service('$jobs', service);