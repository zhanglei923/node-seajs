const fs = require('fs')
const pathutil = require('path')

require('./frame30.simulator')
var seaConfig = require('./sea-config')

var srcPath;

var seaRootFolder;
//console.log('srcPath', srcPath)

let requireMap = {}
let requireList = []

global.cmd_define = (func) => {
    //console.log('-call define!')
    if(typeof func === 'function'){
        func.call(global, global.cmd_require, global.cmd_exports, global.cmd_module);
    }else{
        return func;
    }
}
global.cmd_require = (ownerrealpath, fpath) => {
    console.log('-require', fpath)
    var ori_requirepath = fpath;
    var ownerfolder = pathutil.parse(ownerrealpath).dir;
    var realpath;
    if(/\{/g.test(fpath)){
        fpath = fpath.replace(/\{\w{1,}\}/g, (a,b)=>{
            a = a.replace(/\{/g,'').replace(/\}/g,'')
            return seaConfig.vars[a];
        })
    }
    if(/^\./.test(fpath)) {
        realpath = pathutil.resolve(ownerfolder, fpath);
    } else {
        if(seaConfig.alias[fpath]) fpath = seaConfig.alias[fpath];
        //console.log(seaRootFolder, fpath, ownerrealpath)
        realpath = pathutil.resolve(seaRootFolder, fpath);
    }
    if(!/\.js$/.test(fpath))realpath += '.js';

    realpath = realpath.replace(/\\/ig, '/');
    var fid = realpath.replace(/\//ig, '~')
                        .replace(/\./ig, '~')
                        .replace(/\\/ig, '~')
                        .replace(/\:/ig, '~')
    if(requireMap[fid]) return requireMap[fid].result;
    console.log('-read', ori_requirepath, realpath)
    var fcontent = fs.readFileSync(realpath, {encoding: 'utf-8'})
    fcontent = fcontent.replace(/\bdefine\b/ig, 'global.cmd_define')
                        .replace(/\brequire\b\s{0,}\(\s{0,}\'/ig, `global_cmd_require("${realpath}", '`)
                        .replace(/\brequire\b\s{0,}\(\s{0,}\"/ig, `global_cmd_require("${realpath}", "`)

    //console.log(fcontent)
                        //.replace(/\bexports\b/ig, 'global_cmd_exports')
//replace(/\bmodule\b/ig, 'global_cmd_module')
    //console.log(' realpath', fid, realpath)
    var result;
    try{
        result = eval(fcontent)
    }catch(e){
        console.error('error:', realpath)
        //throw e;
    }
    result = global.cmd_module.exports ? global.cmd_module.exports : result;
    requireMap[fid] = {
        realpath,
        //fcontent,
        result,
        evaled: false
    };
    return result;
}
global.cmd_module = {};
global.global_cmd_require = global.cmd_require;
let runCmd = () =>{
    srcPath = 'E:/workspaces/rkhd/source/'

    seaRootFolder = srcPath;
    ownerFilePath = srcPath + '/test/test.js'
    cmd_require(pathutil.resolve(srcPath, './test/test.js'), 'test/test')

}
runCmd();
