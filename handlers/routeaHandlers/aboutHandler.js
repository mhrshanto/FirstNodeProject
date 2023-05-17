// Modul Scaffholding
const handler = {};

handler.aboutHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'About'
    });
}

module.exports = handler;