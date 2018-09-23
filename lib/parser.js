const path = require("path");
const url = require("url");

const parseUrl = req => url.parse(req.url);

const sanitizePath = parsedPath =>
  path.normalize(parsedPath).replace(/^(\.\.[/\\])+/, "");

const resolvePathName = (directory, Path) => path.join(directory, Path);

module.exports = {
  parseUrl,
  sanitizePath,
  resolvePathName
};
