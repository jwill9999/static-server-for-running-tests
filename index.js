const http = require("http");
const { parseUrl, resolvePathName, sanitizePath } = require("./lib/parser");
const fileSystem = require("./lib/response");
const logger = require("./lib/logger");

let app;

// Port can be passed via command line or defaults
const cliArg = process.argv[2];

const port = parseInt(cliArg) || 8080;

// Init starts the server
const init = () => {
  const server = http.createServer((req, res) => {
    // Built in console logger for method & Url
    logger(req, res);

    // function for parsing and sanitizing the request url
    const parsedUrl = parseUrl(req);

    const sanitizedPath = sanitizePath(parsedUrl.pathname);

    const pathname = resolvePathName(__dirname, sanitizedPath);

    /* Forwards file pathname to filesystem so
       it can be requested and forwarded to the
       browser
    */
    fileSystem.findAndSend(res, pathname);
  });

  app = server.listen(port, () => {
    console.log("listening on port", port);
  });
};

// close terminates the running process
const close = () => {
  app.close();
};

// Allows it to be started from module
if (require.main === module) {
  init();
}

// Exposed API methods
module.exports = {
  init,
  close
};
