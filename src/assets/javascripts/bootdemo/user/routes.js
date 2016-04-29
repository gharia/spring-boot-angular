//= wrapped
(function() {

    /*angular.module("bootdemo.user")
        .config(function($routeProvider) {
            $routeProvider.
            when('/user', {
                templateUrl: "/views/user/user.html",
                controller: "UserListController as ctrl"
            }).
            when('/user/create', {                
            	templateUrl: "/views/user/create.html",
                controller: "UserCreateController as ctrl"
            }).
            when('/user/edit/:userId', {
                templateUrl: "/views/user/create.html",
                controller: "UserCreateController as ctrl"
            }).
            when('/user/:userId', {
                templateUrl: "/views/user/show.html",
                controller: "UserShowController as ctrl"
            })
        });*/
    
    
    angular.module("bootdemo.user")
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('user', {
					url: "/user",
					templateUrl: '/assets/bootdemo/user/templates/user.html',
					controller: "UserListController as ctrl"	
				})
				.state('user-create', {
					url: "/user/create",
					templateUrl: '/assets/bootdemo/user/templates/create.html',
					controller: "UserCreateController as ctrl"	
				})
				.state('user-edit', {
					url: "/user/edit/:userId",
					templateUrl: '/assets/bootdemo/user/templates/create.html',
					controller: "UserCreateController as ctrl"	
				})
				.state('user-show', {
					url: "/user/:userId",
					templateUrl: '/assets/bootdemo/user/templates/show.html',
					controller: "UserShowController as ctrl"	
				})
		});

}());