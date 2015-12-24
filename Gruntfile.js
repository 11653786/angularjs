//配置文件别别为什么
//http://www.cnblogs.com/wangfupeng1988/p/4561993.html,教程
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        //打包插件
        uglify: {
            options: {
                scriptBanners: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            build: {
                //源路径
                src: "js/*.js",
                //发布路径
                dest: "build/ <%= pkg.name %>.min.js"
            }
        },
        //jsdoc,代码规范
        jshint: {
            //检查的文件
            pom: ["Gruntfile.js"],
            jsfile: ["js/*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        //watch真正自动化的插件,自动化的任务和文件配置,不用每次都打grunt命令
        watch: {
            build: {
                files: ['js/*.js'],
                tasks: ["jshint", "uglify"],
                options: {spawn: false}
            }
        }
    });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //加载jsdoc
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //watch会执行之前的东西
    grunt.loadNpmTasks('grunt-contrib-watch');
    //把所有的uglify注入进来
    grunt.registerTask("default", ['jshint', 'uglify', 'watch']);
};
//生成的方法就是在当前文件夹下打grunt命令