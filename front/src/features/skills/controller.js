export default function ($api, $log) {
    'ngInject'
    
    const sc = this;
    
    init();
    
    function init() {
        $api.get('skill')
            .then(apiGetSuccess)
            .catch(apiGetError);
            
        function apiGetSuccess(skills) {
            sc.skills = skills;
        }
        
        function apiGetError(error) {
            $log.error(error);
            sc.skills = [];
        }
    }
};