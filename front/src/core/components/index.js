import header from './toolbar';
import drawer from './drawer';
import main from './main';
import jumbotron from './jumbotron';
import container from './container';
import card from './card';

angular
    .module('app.core.components', [])
    .component('jdsToolbar', header)
    .component('jdsDrawer', drawer)
    .component('jdsMain', main)
    .component('jdsJumbotron', jumbotron)
    .component('jdsContainer', container)
    .component('jdsCard', card);