const path = require('path');
const url = require('url');


    parseUrl = (req) => {
            return url.parse(req.url);
    },

    sanitizePath = (parsedPath) => {
        return path.normalize(parsedPath).replace(/^(\.\.[\/\\])+/, '');
    },

    resolvePathName = (directory, Path) => {
        return path.join(directory, Path);;
    }

  module.exports = {

      parseUrl,
      sanitizePath,
      resolvePathName

  }
   
   



 