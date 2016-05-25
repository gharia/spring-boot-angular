//= wrapped

(function() {

    angular
        .module("bootdemo.index")
        .controller("IndexController", ['$rootScope',IndexController])
    	.controller("LoginController", ['indexService','$stateParams','$location', '$scope', '$rootScope', '$cookies', '$window', LoginController]);   

    function IndexController($rootScope) {
        var vm = this;        
    }
    
    function LoginController(indexService, $stateParams, $location, $scope, $rootScope, $cookies, $window) {
        var self = this;
        self.credentials = {};
        
        var onUserLoginComplete = function(data){        	
        	if (data.firstname) {        		
                $rootScope.authenticated = true;
                $cookies.put("authenticated", true);                  
                $window.location.href = '/home';
                
            } else {
            	alert("Not Authenticated");
                $rootScope.authenticated = false;
                $location.path("login");
                self.error = true;
                $cookies.put("authenticated", false);
            }
        	
        };

		self.credentials = {};
		
        self.login = function(){   	
        	indexService.login(self.credentials).then(onUserLoginComplete);
        }
                
    }    

}());