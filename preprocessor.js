var ReactTools = require('react-tools');

module.exports = {
  process: function(src) {
    return ReactTools.transform(src, {sourceMap: true, harmony: true});
  }
};