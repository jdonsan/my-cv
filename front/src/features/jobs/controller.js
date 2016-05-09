export default function ($api, $log) {
    'ngInject'
    
    const sc = this;
    
    init();
    
    function init() {
        $api.get('job')
            .then(apiGetSuccess)
            .catch(apiGetError);
            
        function apiGetSuccess(jobs) {
            sc.jobs = jobs;
        }
        
        function apiGetError(error) {
            $log.error(error);
        }
    }
};