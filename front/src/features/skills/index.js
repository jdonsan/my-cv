import route from './route';
import controller from './controller';

angular
    .module('app.features.skills', [])
    .config(route)
    .controller('SkillsController', controller);