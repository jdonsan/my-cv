export default function ($timeout) {
    'ngInject'
    
    const lc = this;
    
    lc.show = false;
    
    $timeout(showLoader, 1000);
    
    function showLoader() {
        lc.show = true;
    }
};