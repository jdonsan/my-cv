import './core/';
import './features/';
import route from './app/route';

const dependencies = [
    'ui.router',
    
    'app.core',
    'app.features'
];

angular
    .module('app', dependencies)
    .config(route);