#!/usr/bin/env node
const program = require('commander')
//-v版本号
program.version(require('../package.json').version)
//注册方法
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
//固定写法
program.parse(process.argv)