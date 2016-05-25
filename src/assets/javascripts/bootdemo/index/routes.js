//= wrapped

(function() {  
    
	angular.module("bootdemo.index")
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url: "/",
				templateUrl: '/assets/bootdemo/index/templates/welcome.html',
				controller: 'IndexController as vm'	
			})
			.state('login', {
				url: "/login",
				templateUrl: '/assets/bootdemo/index/templates/login.html',
				controller: 'LoginController as ctrl'	
			})			
			
		});

}());