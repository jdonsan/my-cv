import header from './toolbar';
import drawer from './drawer';
import main from './main';
import jumbotron from './jumbotron';

angular
    .module('app.core.components', [])
    .component('jdsToolbar', header)
    .component('jdsDrawer', drawer)
    .component('jdsMain', main)
    .component('jdsJumbotron', jumbotron);