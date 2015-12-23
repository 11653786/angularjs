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
                src: "js/test.js",
                //发布路径
                dest: "build/ <%= pkg.name %>.min.js"
            }
        },
        //jsdoc,代码规范
        //jshint:{
        //    //检查的文件
        //    build:["gruntfile.js","js/*.js"],
        //    option:{
        //        jshintrc:".jshintrc"
        //    }
        //}


    });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //加载jsdoc
   // grunt.loadNpmTasks('grunt-contrib-jshint');
    //把所有的uglify注入进来
   // grunt.registerTask("default", ['jshint','uglify']);
    grunt.registerTask("default", ['uglify']);
}
//生成的方法就是在当前文件夹下打grunt命令