var stream = require('stream');
var util = require('util');
util.inherits(MemoryStream, stream.Readable);
function MemoryStream(options,index) {
  options = options || {};
  // options.objectMode = true;
  this.index = index
  stream.Readable.call(this, options);
}
MemoryStream.prototype._read = function (size) {
  // this.push({h:this.index--});
  this.push(String(this.index--));
  

};
var memoryStream = new MemoryStream({},10);
memoryStream.on('readable', function () {
  var output = memoryStream.read();
  console.log('Type: %s, value: %j', typeof output, output.toString());
});

