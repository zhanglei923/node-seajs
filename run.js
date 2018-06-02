const fs = require('fs')
const pathutil = require('path')

var prjPath = pathutil.resolve(__dirname, './');
var srcPath = pathutil.resolve(prjPath, './cmdCode/');
console.log('srcPath', srcPath)

cmdFuncMap = {}

let exec = ()=>{
    for(var fid in cmdFuncMap){
        var fobj = cmdFuncMap[fid]
        if(!fobj.evaled){
            console.log('-DO-eval:', fid)
            var result = eval(fobj.fcontent)
            fobj.evaled = true;
            console.log(result)
        }
    }
}
global.cmd_define = (func) => {
    console.log('-call define!')
    func.call(global, global.cmd_require, global.cmd_exports, global.cmd_module);
}

global.cmd_require = (fpath) => {
    console.log('-ask require', fpath)
    var realpath = pathutil.resolve(srcPath, fpath);
    realpath += '.js'
    realpath = realpath.replace(/\\/ig, '/');
    var fid = realpath.replace(/\//ig, '~')
                        .replace(/\./ig, '~')
                        .replace(/\\/ig, '~')
                        .replace(/\:/ig, '~')
    if(cmdFuncMap[fid]) return;
    console.log('-DO require', fpath)
    var fcontent = fs.readFileSync(realpath, {encoding: 'utf-8'})
    fcontent = fcontent.replace(/\bdefine\b/ig, 'global.cmd_define')
                        .replace(/\brequire\b/ig, 'global_cmd_require')
                        .replace(/\bexports\b/ig, 'global_cmd_exports')
                        .replace(/\bmodule\b/ig, 'global_cmd_module')
    console.log('-fid', fid)
    console.log('-fpath', realpath)
    cmdFuncMap[fid] = {
        realpath,
        fcontent,
        evaled: false
    };
    exec()
}
global.cmd_module = {

}
global.global_cmd_require = global.cmd_require;
let runCmd = () =>{
    cmd_require('./a')
}
runCmd();
