export default function ($api, $log) {
    'ngInject'
    
    const pc = this;
    
    init();
    
    function init() {
        $api.get('profile')
            .then(apiGetSuccess)
            .catch(apiGetError);
            
        function apiGetSuccess(profile) {
            pc.profiles= profile;
            pc.profile = profile.shift();
        }
        
        function apiGetError(error) {
            $log.error(error);
        }
    }
};