

module.exports = function(grunt) {

    grunt.loadNpmTasks('cssmodeling');

    var configObj = {
        pkg: '<json:package.json>'
    };

    /*==========================
    CSSMODELING
    ==========================*/
    configObj.cssmodeling = configObj.cssmodeling || {};
    configObj.cssmodeling["cssmodeling"] = {
        files: {
            'dist':
            [
                'cssmodeling_col_12_quartered_viewport.json'
            ]
        },
        options: {
            resets:[
                // 'cssmodeling/_resets/**/*.css'
            ],
            type:"less",
            var_prefix:"v-"
        }
    };

    configObj.watch = configObj.watch || {};
    configObj.watch["cssmodeling"] = {
        files:[
            'cssmodeling_col_12_quartered_viewport.json'
        ],
        tasks: ["cssmodel"]
    };


    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling:cssmodeling'
    ] );

}
