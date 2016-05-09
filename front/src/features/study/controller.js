export default function ($api, $log) {
    'ngInject'
    
    const sc = this;
    
    init();
    
    function init() {
        $api.get('study')
            .then(apiGetSuccess)
            .catch(apiGetError);
            
        function apiGetSuccess(studies) {
            sc.studies = studies;
        }
        
        function apiGetError(error) {
            $log.error(error);
        }
    }
};