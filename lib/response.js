const fs = require("fs");
const path = require("path");
const mimeType = require("./mimeTypes");

const fileSystem = {};

fileSystem.findAndSend = (res, pathname) => {
  fs.exists(pathname, exist => {
    if (!exist) {
      // if the file is not found, return 404
      console.log("\x1b[31m", `ERROR : File ${pathname} not found!`);
      const data = JSON.stringify({
        message: `File ${pathname} not found!`,
        statusCode: 500
      });
      res.writeHead(500, { "Content-type": "application/json" });
      res.end(data);
      return;
    }

    // if is a directory, then look for index.html
    if (fs.statSync(pathname).isDirectory()) {
      pathname = "/src/index.html";
    }

    const newLocal = path.parse(pathname).ext;
    // read file from file system
    fs.readFile(pathname, (err, data) => {
      if (err) {
        console.log("\x1b[31m", "ERROR", err.message);
        const data2 = JSON.stringify({ message: err.message, statusCode: 500 });
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(data2);
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        const ext = newLocal;
        // if the file is found, set Content-type and send data
        res.setHeader("Content-type", mimeType[ext] || "text/plain");
        res.end(data);
      }
    });
  });
};

module.exports = fileSystem;
