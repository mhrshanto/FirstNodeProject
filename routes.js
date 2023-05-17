// dependencies
const { sampleHandler } = require('./handlers/routeaHandlers/sampleHandler');
const { notFoundHandler } = require('./handlers/routeaHandlers/notFoundHandler');
const { aboutHandler } = require('./handlers/routeaHandlers/aboutHandler');


// Module Scaffolding

const routes = {
    'sample': sampleHandler,
    'notFound': notFoundHandler,
    'about': aboutHandler
};