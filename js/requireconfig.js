require.config({
    baseUrl: 'js/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: [
             '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
             // if CDN fails or can't connect to server load locally
             '../bower_components/jquery/dist/jquery.min'
        ],
        easing: '../bower_components/jquery.easing/js/jquery.easing',
        foundation: '../bower_components/foundation/js/foundation',
        modernizer: '../bower_components/modernizr/modernizr',
        scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo.min'
        //wodry: '../bower_components/wodry/dist/wodry'
    }
});

//Load the main app module to start the app
requirejs(['app']);