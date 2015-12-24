//配置文件别别为什么
//http://www.cnblogs.com/wangfupeng1988/p/4561993.html,教程
http://www.cnblogs.com/lhb25/archive/2013/01/28/grunt-for-javascript-project-c.html gruntfile语法
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
                //pom: ["Gruntfile.js"],
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
                    options: {spawn: true}
                }
            },

            //服务器连接服务,类似于jetty和tomcat
            connect: {
                options: {
                    port: 9000,
                    hostname: 'localhost',//默认就是这个值，可配置为本机某个 IP，localhost 或域名
                    livereload: 35729,//声明给 watch 监听的端口
                    keepalive: true //保持连接
                },
                server: {
                    options: {
                        open: true, //自动打开网页 http://
                        base: [
                            ''  //主目录
                        ]
                    }
                }

            }
        });

        grunt.loadNpmTasks('grunt-contrib-connect');
        // 加载提供"uglify"任务的插件
        grunt.loadNpmTasks('grunt-contrib-uglify');
        //加载jsdoc
        grunt.loadNpmTasks('grunt-contrib-jshint');
        //watch会执行之前的东西
        grunt.loadNpmTasks('grunt-contrib-watch');
        //把所有的uglify注入进来
        //尼玛这个watch就结束不了,一直打命令把,
      //  grunt.registerTask("server", ['jshint', 'uglify', 'watch','connect']);
        //watch尼玛有问题一直running不结束所以先
        grunt.registerTask("default", ['jshint', 'uglify','connect']);
        //项目启动命令 grunt defult
    };
//生成的方法就是在当前文件夹下打grunt命令