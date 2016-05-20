export default function ($api, $log) {
    'ngInject'
    
    const cc = this;
    
    init();
    
    function init() {
        $api.get('contact')
            .then(apiGetSuccess)
            .catch(apiGetError);
            
        function apiGetSuccess(contacts) {
            cc.contacts = contacts;
        }
        
        function apiGetError(error) {
            $log.error(error);
            cc.contacts = [];
        }
    }
};