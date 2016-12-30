module.exports = function(grunt) {

    grunt.registerTask('speak', function() {
       console.log ("Im speaking");
    });
    grunt.registerTask('yell', function() {
       console.log ("Im YELLING!");
    });
    grunt.registerTask('both', ['speak', 'yell'])
}
