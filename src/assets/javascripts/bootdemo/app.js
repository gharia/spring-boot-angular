//= wrapped
//= require /bootdemo/core/bootdemo.core
//= require /bootdemo/user/bootdemo.user
//= require /bootdemo/index/bootdemo.index


(function() {

    angular.module("bootdemo", [
        "ui.router",
        "bootdemo.core",
        "bootdemo.index",
        "bootdemo.user"
    ])
    /*.directive("menuData", function () {
        return function (scope, element, attrs) {
            scope.$watch("menu", function (value) {                
                $(".dropdown-button").dropdown();                
            });
            
        };
    })    
    .run(function ($rootScope, $location, $state, $stateParams, $window, $cookies) {
    	 console.log($window); 
    	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
    		console.log("root change start");
    		var isReload = $cookies.get("reload");
    		console.log("isReload : " + isReload);
    		if(isReload != undefined && isReload){
    			if($cookies.get("authenticated") != null){
    	    		$rootScope.authenticated = $cookies.get("authenticated");
    	    	}    	 	
    	    	
    	    	if($rootScope.authenticated){
    	    		$rootScope.menu = [
    								   {
    									   title: 'Logout',
    									   url: '#logout',
    								   },
    	                	           {
    	                	               title: 'User',
    	                	               url: '',
    	                	               subItems: [
    	                	                          {
    	                	                        	  title: 'Create',
    	                	                        	  url: '#user/create'
    	                	                          },
    	                	                          {
    	                	                        	  title: 'List',
    	                	                        	  url: '#user'
    	                	                          },
    	                	                          {
    	                	                        	  title: 'Home',
    	                	                        	  url: '#'
    	                	                          },
    	    									
    	                	               ]
    	                	           },
    	                	           {
    	                	               title: 'Task',
    	                	               url: '',
    	                	               subItems: [
    	                	                          {
    	                	                        	  title: 'Create',
    	                	                        	  url: '#task/create'
    	                	                          },
    	                	                          {
    	                	                        	  title: 'List',
    	                	                        	  url: '#task'
    	                	                          },
    	                	                          {
    	                	                        	  title: 'Home',
    	                	                        	  url: '#'
    	                	                          },
    	    									
    	                	               ]
    	                	           }
    	                	           
    	             ];
    	    		
    	    	}else{
    	    		$rootScope.menu = [
    	        	    	           {
    	        	    	               title: 'Login',
    	        	    	               url: '#login'
    	        	    	           }
    	        	];
    	    		
    	    	}
    		}else{
    			var isReload = false;
    		}
    	});
    	
    	var windowElement = angular.element($window);
    	
    	windowElement.on('beforeunload', function (event) {    	    
    	    $cookies.put("reload", true);
    	});
    	
    
    	
    	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
    		console.log("root change success");
    	});
    			
    	
    	
    	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
    		console.log("root change error");
    	});
    });     */ 
    

}());