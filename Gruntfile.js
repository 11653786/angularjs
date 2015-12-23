//配置文件别别为什么
module.exports = function (grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json")
    });

    grunt.registerTask("default",[]);
}