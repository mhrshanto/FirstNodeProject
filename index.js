// Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes')

// Module Scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000
};

// Server Creation
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server Created Successfully at ${app.config.port}`);
    });
}
app.handleReqRes = handleReqRes;


// Function
app.createServer();