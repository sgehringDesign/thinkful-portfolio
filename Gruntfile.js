module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      modernizr: {
        expand: true,
        cwd: 'bower_components/modernizr/',
        src: ['modernizr.js'],
        dest: 'js/',
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: ['jquery.min.js'],
        dest: 'js/',
      },
      jqueryMap: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: ['jquery.min.map'],
        dest: 'js/',
      },
      foundation: {
        expand: true,
        cwd: 'bower_components/foundation/js/',
        src: ['foundation.min.js'],
        dest: 'js/',
      },
    },
    
    bower_concat: {
        all: {
            dest: 'js/frameworks.js',
            //cssDest: 'build/app.css',
            dependencies: {
                'foundation': ['modernizr', 'jquery'],
                'jquery-placeholder': ['jquery'],
                'jquery.cookie': ['jquery'],
            },
            bowerOptions: {
                relative: false
            }
        }
    },
    
    uglify: {
        options: {
            sourceMap: './js/frameworks.min.js.map',
            mangle: true,
            compress: {},
            beautify: false
        },
        development: {
            files: {
                './js/frameworks.min.js': './js/frameworks.js',
            }
        }
    },
    
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },
    
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });
  
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('build', [ 'copy','bower_concat','uglify','sass'  ]); //'concat_css'
  grunt.registerTask('default', [ 'copy', 'bower_concat','uglify','build', 'watch' ] );   // ['copy', 'uglify', 'concat', 'watch']    ['build','watch']
  
}
