var env = process.env.NODE_ENV || 'development';

var config = {
    port: process.env.PORT,
    db: 'mongodb://mean1:mean1@kahana.mongohq.com:10055/meantut',
    host: process.env.IP
};

module.exports = config;