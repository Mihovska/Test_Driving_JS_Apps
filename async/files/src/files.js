var fs = require('fs');

var linesCount = function(fileName, callback, onError) {
  var processFile = function(err, data) {
    if(err) {
      onError('unable to open file ' + fileName);
    } else {
      var file_length = data.toString().split('\n').length;
      callback(file_length);      
    }
  };
  
  fs.readFile(fileName, processFile);
};

module.exports = linesCount;