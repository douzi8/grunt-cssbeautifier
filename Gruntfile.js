module.exports = function(grunt) {
  "use strict";
  // Project configuration.
  grunt.initConfig({
    // Configuration to be run
    cssbeautifier: {
      files: ['test/*.css'],
      options: {
        indent: '  ',
        openbrace: 'end-of-line',
        autosemicolon: true
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, beautifiy, lint and run all tests.
  grunt.registerTask('default', ['cssbeautifier', 'jshint']);
};
