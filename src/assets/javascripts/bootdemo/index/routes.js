//= wrapped

(function() {
    angular.module('bootdemo.index')
        .config(function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: '/views/index/welcome.html',
                controller: 'IndexController as vm'
            })
    });

}());