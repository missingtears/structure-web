require("babel-register")({
    presets: ['es2015', 'react', 'stage-2']
});

require("babel-polyfill");

// 程序入口
require("./src/app.js");