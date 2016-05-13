module.exports = {
    express: {
        port: process.env.PORT || 4001
    },
    mongodb: {
        url: 'mongodb://jdonsan:mycv2016@ds013941.mlab.com:13941/my-cv'
    },
    resources: [
        'course',
        'job',
        'profile',
        'project',
        'skill',
        'study',
        'contact'
    ]
}