const Rename = require('recursive-rename');

const renameJsToTxt = new Rename({
  src: 'txt',
  dest: 'js',
})

const renameTestToTxt = new Rename({
  src: 'test',
  dest: 'test.js',
  exclude: ['__snapshots__']
})



renameJsToTxt.dive();
renameTestToTxt.dive()