define(function(require, exports, module) {
    console.log('   >in a')

    var obj = require('./b')

    obj.c = 100;

    var obj2 = require('./b')


    console.log('   >in a2', obj2)

    return {
        init: function(rkContent, id) {

        }
    }
});
