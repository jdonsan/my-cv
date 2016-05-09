import route from './route';
import controller from './controller';

angular
    .module('app.features.skills', ['angular-svg-round-progressbar'])
    .config(route)
    .controller('SkillsController', controller);