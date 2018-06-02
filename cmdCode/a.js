define(function(require, exports, module) {
    console.log('   >in a')

    var obj = require('./b')

    console.log('   >in a2', obj)

    return {
        init: function(rkContent, id) {

        }
    }
});
