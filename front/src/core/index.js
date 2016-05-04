import './components';
import './services';
import constants from './constants';

const dependencies = [
    'app.core.components',
    'app.core.services'
];

angular
    .module('app.core', dependencies)
    .constant('constants', constants);