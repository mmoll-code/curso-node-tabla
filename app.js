const { number } = require('yargs');
const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

//console.clear();
//const [ ,,arg3 ] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

 createFile( argv.b, argv.l, argv.t )
     .then( fileName => console.log(fileName.rainbow, 'creado') )
     .catch( err => console.log(err) );

