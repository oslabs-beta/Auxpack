#!/usr/bin/env node

"use strict";

const commander = require("commander");
const path = require("path");
const program = new commander.Command("auxpack");
const server = require("../utils/server.js");
const pkg = require("../package.json");
const fs = require('fs')

const main = (module.exports = opts => {
  opts = opts || {};
  //sets argv equal to the arguments passed into command line prompt or previously stored arguements
  const argv = typeof opts.argv === "undefined" ? process.argv : opts.argv;

  //running the command "auxpack"
  program
    //version of plugin
    .version(pkg.version)
    //setting up an option thtat takes in the port from user
    .option(
      "-p --port [port]",
      "The port to run the server on",
      /^[0-9]{2,}/,
      //default port
      1111
    )
    //giving the user the option to declare another file to read from
    .option(
      "-f --filename",
      "The json file to load stats from - Resolved relative to where the command is executed"
    )
    .usage("[options] [filename]")
    .parse(argv);
  //accessing the file information or getting the information from user definition
  let filename = program.filename || program.args[0] || "./aux-stats.json";
  filename = path.resolve(process.cwd(), filename);
  console.log(`Launching auxpack with filename 
  "${filename}" and port ${program.port}`
  );
  //grabs data from the filename to pass to server
  const data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }))
  //runs server file with filedata
  server(data, program.port);
});
//run the function if it gets called ie with the command prompt
if (require.main === module) {
  main();
}