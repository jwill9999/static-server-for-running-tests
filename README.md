# Testing Server


## Description

If your running tests that require a server to serve static files, such as when using "Puppeteer" it often requires a degree of configuration. Testing Server provides an easy API to start and stop your server programatically. The server is configured to serve a number of static file types as illustrated below. If your serving an HTML file then this needs to be placed within a src folder.

Alternatively you can run your server from the command line.

```
######## CLI ###############

    node index.js 3000
```


```
######### FILE PATH & PORT ############

> HTML File served from 'src' folder

> Default port 8080

```



### MIMETYPES AVAILABLE

 > ico : image/x-icon

 > html : text/html

 > js : text/javascript

 > json : application/json

 > css : text/css

 > png : image/png

 > jpg : image/jpeg

 > wav : 'audio/wav

 > mp3 : audio/mpeg

 > svg : image/svg+xml

 > pdf : application/pdf

 > doc : application/msword

 > eot : appliaction/vnd.ms-fontobject

 > ttf : aplication/font-sfnt


 ## API

 ``` 
  init() > starts server port 8080

  close() > terminates running server 

 ```

 ## API Example

 ```
 ###############   Example  ######################

  const server = require('path_to_serverFile')

  server.init()

  server.close()

 ```
