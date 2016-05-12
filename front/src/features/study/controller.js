export default function ($api, $log) {
    'ngInject'

    const sc = this;

    init();

    function init() {
        getStudies();
        getCourses();
    }

    function getStudies() {
        $api.get('study').then(apiGetSuccess).catch(apiGetError);

        function apiGetSuccess(studies) {
            sc.studies = studies;
        }
    }

    function getCourses() {
        $api.get('course').then(apiGetSuccess).catch(apiGetError);

        function apiGetSuccess(courses) {
            sc.courses = courses;
        }
    }

    function apiGetError(error) {
        $log.error(error);
    }
};