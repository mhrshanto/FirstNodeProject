// Modul Scaffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Not Found'
    });
}

module.exports = handler;