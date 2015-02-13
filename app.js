#!/usr/bin/env node

'use strict';
var connect = require('connect'),
    pub = require('serve-static'),
    fs = require('fs'),
    arg = process.argv.splice(2),
    currentDir = fs.realpathSync((!Number(arg[0]) && arg[0]) || process.cwd()),
    port = (Number(arg[0]) && arg[0]) || (Number(arg[1]) && arg[1]) || 3000;

connect()
    .use(pub(currentDir))
    .listen(port);

console.log('Server listening on localhost:' + port)
console.log('From: ' + currentDir);