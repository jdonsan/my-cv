module.exports = function (resource) {
    var logger = require('log4js').getLogger(resource);
    var service = require('./service')(resource);

    return {
        getAll: function (req, res, err) {
            res.status(200).json({
                name: 'Jose',
                surname: 'Dongil Snachez'
            })
            
        /*    
            service.getAll()
                .then(getAllSuccess)
                .catch(getAllError);

            function getAllSuccess(models) {
                return models;
            }

            function getAllError(error) {
                logger.error('getAll - ' + error);
                res.status(500).send({ error: error });
            }*/
        }
    };
};