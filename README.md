# heroku-nginx-proxy-node

An example of using Nginx as a reverse proxy to a node.js Express app on Heroku 16

        +--------+       /        +-------------+       /       +-----------------+
        |        |   +------->    |             |   +------->   |                 |
        |  USER  |                |    NGINX    |               |     EXPRESS     |
        |        |   <-------+    |             |   <-------+   |                 |
        +--------+                +-------------+               +-----------------+
                                                                  localhost:3000

## Heroku Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## References
- https://github.com/heroku/heroku-buildpack-nginx
- https://github.com/heroku/heroku-buildpack-nodejs
- https://github.com/narr/heroku-nginx-node-example
- https://github.com/microsoft/project-nodejs-express-webapp
