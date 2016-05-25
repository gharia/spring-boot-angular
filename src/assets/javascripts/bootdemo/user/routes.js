//= wrapped
(function() {
    
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