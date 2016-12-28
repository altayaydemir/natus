# Deployment Guide

## Setup
* Install [node.js](https://nodejs.org/en/) (v6.9.1 or higher) to server.
* Clone the repository: `git clone git@github.com:altayaydemir/natus.git`
* Build app for production `yarn run build`, then serve static files inside `dist` folder with a webserver.

## Example Nginx Config

```
server {
  listen 80;

  server_name natus.zipzip.top;

  root /var/www/natus/dist/;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```
