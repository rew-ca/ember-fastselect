module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          ".tmp/app/init.js": "app/init.coffee",
          ".tmp/app/register.js": "app/register.coffee",
          ".tmp/app/scripts/views/ember-fastselect-view.js": "app/scripts/views/ember-fastselect-view.coffee"
        }
      }
    },
    concat: {
      dist: {
        src:  ['.tmp/app/init.js', '.tmp/app/scripts/views/ember-fastselect-view.js', '.tmp/app/register.js'], //<%= pkg.name %>
        dest: 'build/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:M:s") %> */\n'
      },
      build: {
        src:  'build/<%= pkg.name %>.js', //<%= pkg.name %>
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    clean: ['.tmp']
  });

  // Load the plugins that provides the tasks above:
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s). (The one that is ran when 'grunt' command is called from the directory)
  grunt.registerTask('default', ['coffee', 'concat', 'uglify', 'clean']);
};
