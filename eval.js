global.cmd_define = (func) => {
    //console.log('-call define!')
    if(typeof func === 'function'){
        func.call(global, global.cmd_require, global.cmd_exports, global.cmd_module);
    }else{
        return func;
    }
}
global_cmd_require=()=>{}

eval(`

global.cmd_define(function(require, exports, module) {
    'use strict';
    
    var rk = global_cmd_require("E:/workspaces/rkhd/source/core/_rk/rk.error.js", '../rk');
    rk.error = {};
    (function() {
        var ErrorCodes = {
            '100000': {
                msg: 'AABBCC'
            },
            '100001': {
                msg: 'AABBCC'
            },
            //shengao
            '310104': {
                msg: rk.i18n("js.not_save_reportedAccount")
            }
        }
        $.extend(rk.error, {
            getTpl: function(code){
                return ErrorCodes[code+''].msg;
            },
            getErrorText: function(code, data){
                if(typeof data == 'undefined')data = {};
                var tpl = this.getTpl(code);
                var text = rk.templateText(tpl, data);
                return text;
            },
            notice: function(code, data) {
                var text = this.getErrorText(code, data);
                rk.noticeError(text);
            }
        });
    })();

    module.exports = rk;
});



`)