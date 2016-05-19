import LoaderController from './controller';

export default {
    transclude: true,
    templateUrl: 'src/core/components/loader/template.html',
    controller: LoaderController,
    bindings: {
        resource: '<'
    }
};