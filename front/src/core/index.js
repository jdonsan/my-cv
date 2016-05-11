import './components';
import './services';
import './directives';
import constants from './constants';

const dependencies = [
    'app.core.components',
    'app.core.services',
    'app.core.directives'
];

angular
    .module('app.core', dependencies)
    .constant('constants', constants);