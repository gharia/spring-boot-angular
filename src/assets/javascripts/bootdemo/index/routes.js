//= wrapped

(function() {
    /*angular.module('bootdemo.index')
        .config(function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: '/views/index/welcome.html',
                controller: 'IndexController as vm'
            })
    });*/
    
    angular.module("bootdemo.index")
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('index', {
					url: "/",
					templateUrl: '/assets/bootdemo/index/templates/welcome.html',
					controller: 'IndexController as vm'	
				})
			});

}());