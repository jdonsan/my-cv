module.exports = {
    express: {
        port: process.env.PORT || 4001
    },
    mongodb: {
        url: ''
    },
    resources: [
        'course',
        'job',
        'profile',
        'project',
        'skill',
        'study'
    ]
}