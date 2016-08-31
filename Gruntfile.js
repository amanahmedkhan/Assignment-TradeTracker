module.exports = function(grunt){

	grunt.initConfig({
		// Start for compass
			compass: {
		      dev: {
		        options: {
		          config: 'config.rb',
		          force: true
		        }
		      }
		    },
	    // Start for compass
	    
	    // Start for watch
		    watch: {
			    sass: {
				    files: ['app/scss/**/*.scss'],
				    tasks: ['compass:dev'],
				    options: {
				        livereload: true,
			        }
			    },
			    html:{
			    	files:['app/*.html'],
			    	options:{
			    		livereload: true,
			    	}
			    },
			    js:{
			    	files:['app/js/*.js'],
			    	options:{
			    		livereload: true,
			    	}
			    },
			    images:{
			    	files:['app/images/*.{gif,jpeg,jpg,png}'],
			    	options:{
			    		livereload: true,
			    	}
			    },
			    livereload: {
			        files: ['app/*'],
			        options: {
				        refresh:{
				        	target: 'http://localhost:8000/',
				        }
			        }
			    }
		    },
	    // Start for watch

	    // Start for server
		    connect: {
		    	server: {
				    options: {
				        port: 8000,
				        livereload: true,
				        hostname: 'localhost'
				        //base: 'app'
				    }
				}
			}
		// End for server
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('start', ['connect:server', 'watch']);
};