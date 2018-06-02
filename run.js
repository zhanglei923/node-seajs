const fs = require('fs')
const pathutil = require('path')

var prjPath = pathutil.resolve(__dirname, './');
var srcPath = pathutil.resolve(prjPath, './cmdCode/');

var seaRootFolder = srcPath;
var currentFolder = seaRootFolder;
//console.log('srcPath', srcPath)

let requireMap = {}
let requireList = []

global.cmd_define = (func) => {
    //console.log('-call define!')
    func.call(global, global.cmd_require, global.cmd_exports, global.cmd_module);
}
var currentFilePath;
global.cmd_require = (fpath) => {
    //console.log('-require', fpath)
    var realpath;
    if(/^\./.test(fpath)) {
        var currentFolder = pathutil.parse(currentFilePath).dir;
        realpath = pathutil.resolve(currentFolder, fpath);
    }else{
        realpath = pathutil.resolve(seaRootFolder, fpath);
    }
    currentFilePath = realpath;
    var oldCurrentFilePath = currentFilePath;
    
    if(!/\.js$/.test(fpath))realpath += '.js';

    realpath = realpath.replace(/\\/ig, '/');
    var fid = realpath.replace(/\//ig, '~')
                        .replace(/\./ig, '~')
                        .replace(/\\/ig, '~')
                        .replace(/\:/ig, '~')
    if(requireMap[fid]) return requireMap[fid].result;
    //console.log('-read', realpath)
    var fcontent = fs.readFileSync(realpath, {encoding: 'utf-8'})
    fcontent = fcontent.replace(/\bdefine\b/ig, 'global.cmd_define')
                        .replace(/\brequire\b/ig, 'global_cmd_require')
                        //.replace(/\bexports\b/ig, 'global_cmd_exports')
//replace(/\bmodule\b/ig, 'global_cmd_module')
    //console.log(' realpath', fid, realpath)
    var result = eval(fcontent)
    result = global.cmd_module.exports ? global.cmd_module.exports : result;
    requireMap[fid] = {
        realpath,
        //fcontent,
        result,
        evaled: false
    };
    currentFilePath = oldCurrentFilePath;
    return result;
}
global.cmd_module = {};
global.global_cmd_require = global.cmd_require;
let runCmd = () =>{
    currentFilePath = pathutil.resolve(seaRootFolder, './a') + '.js'
    cmd_require('./a')
}
runCmd();
