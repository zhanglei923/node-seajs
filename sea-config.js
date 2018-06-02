var isBrowser = true;

module.exports = {
    sourceRoot: 'E:/workspaces/node-seajs/cmdCode/',
    vars: {
        'locale': isBrowser ? SESSION.user.language : '',
        'languageUrl':isBrowser? SESSION.languageUrl:'',
        'fullcalendarLocale':'SESSION.plugin.locale.fullcalendar',
        'timepickerLocale': 'SESSION.plugin.locale.timepicker',
        'ueditorLocale': 'SESSION.plugin.locale.ueditor'
    },
    alias: {
        'rk': 'core/rkloader',
        'fancymap': 'lib/fancymap.js',
        'commonjs': 'core/widgets/common.js',
        'globaljs': 'core/widgets/global.js',
        'userService': 'core/services/2.0/rk_userService',
        'workreportService': 'core/services/2.0/rk_workreportService',
        'noticeService': 'core/services/biz/noticeService',
        'xsy': 'platform/core/xsyloader',
        'scheduleService': 'core/services/biz/scheduleService'
    }
}