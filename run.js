const fs = require('fs')
const pathutil = require('path')

var prjPath = pathutil.resolve(__dirname, './');
var srcPath = pathutil.resolve(prjPath, './cmdCode/');
console.log('srcPath', srcPath)

let requireMap = {}
let requireList = []

global.cmd_define = (func) => {
    console.log('-call define!')
    func.call(global, global.cmd_require, global.cmd_exports, global.cmd_module);
}

global.cmd_require = (fpath) => {
    console.log('-require', fpath)
    var realpath = pathutil.resolve(srcPath, fpath);
    realpath += '.js'
    realpath = realpath.replace(/\\/ig, '/');
    var fid = realpath.replace(/\//ig, '~')
                        .replace(/\./ig, '~')
                        .replace(/\\/ig, '~')
                        .replace(/\:/ig, '~')
    if(requireMap[fid]) return requireMap[fid].result;
    console.log('-read', fpath)
    var fcontent = fs.readFileSync(realpath, {encoding: 'utf-8'})
    fcontent = fcontent.replace(/\bdefine\b/ig, 'global.cmd_define')
                        .replace(/\brequire\b/ig, 'global_cmd_require')
                        //.replace(/\bexports\b/ig, 'global_cmd_exports')
//replace(/\bmodule\b/ig, 'global_cmd_module')
    console.log(' fpath', fid, realpath)
    var result = eval(fcontent)
    result = global.cmd_module.exports ? global.cmd_module.exports : result;
    requireMap[fid] = {
        realpath,
        fcontent,
        result,
        evaled: false
    };
    return result;
}
global.cmd_module = {};
global.global_cmd_require = global.cmd_require;
let runCmd = () =>{
    cmd_require('./a')
}
runCmd();
