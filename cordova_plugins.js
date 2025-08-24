cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com-admob-plugin.admob",
        "file": "plugins/com-admob-plugin/www/admob.js",
        "pluginId": "com-admob-plugin",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "id": "cordova-plugin-insomnia.Insomnia",
        "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
        "pluginId": "cordova-plugin-insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.Toast",
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-admob-plugin": "5.5.0",
    "cordova-plugin-insomnia": "4.3.0",
    "cordova-plugin-x-toast": "2.6.2",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});