#!/usr/bin/env node

const fs = require('fs');
const conf = require('./config');

const data = JSON.stringify(conf, null, 2);

fs.writeFileSync(`${__dirname}/config.json`, data);
