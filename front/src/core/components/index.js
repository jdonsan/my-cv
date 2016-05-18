import header from './toolbar';
import drawer from './drawer';
import main from './main';
import jumbotron from './jumbotron';
import container from './container';
import card from './card';
import cardHeader from './card-header';
import cardMedia from './card-media';
import cardContent from './card-content';

angular
    .module('app.core.components', [])
    .component('jdsToolbar', header)
    .component('jdsDrawer', drawer)
    .component('jdsMain', main)
    .component('jdsJumbotron', jumbotron)
    .component('jdsContainer', container)
    .component('jdsCard', card)
    .component('jdsCardHeader', cardHeader)
    .component('jdsCardMedia', cardMedia)
    .component('jdsCardContent', cardContent);