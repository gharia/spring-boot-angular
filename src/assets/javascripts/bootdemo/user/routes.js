//= wrapped
(function() {

    angular.module("bootdemo.user")
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
        });

}());