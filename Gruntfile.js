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
      foundation: {
        expand: true,
        cwd: 'bower_components/foundation/js/',
        src: ['foundation.min.js'],
        dest: 'js/',
      },
    },
    
    bower_concat: {
        all: {
            dest: 'build/app.js',
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
    
     // Compress the app.js into app.min.js
    uglify: {
        options: {
            sourceMap: './build/app.min.js.map',
            mangle: true,
            compress: {},
            beautify: false
        },
        development: {
            files: {
                './build/app.min.js': './build/app.js',
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('build', ['copy','bower_concat','uglify','sass']);
  grunt.registerTask('default', ['copy', 'bower_concat','uglify','build', 'watch'] );   // ['copy', 'uglify', 'concat', 'watch']    ['build','watch']
  
}
