module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        // Get the bootstrap path for compiling.
        noCache: true
      },
      dist: {
        options: {
          sourcemap: false,
          style: 'compressed'
        },
        files: {
          'assets/css/grid.min.css' : 'assets/scss/grid.scss'
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['sass']
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass']
      },
      livereload: {
        files: [
          '!bower_components/**',
          'assets/css/**/*.css',
        ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass']);

};
