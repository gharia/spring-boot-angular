//= wrapped
//= require /bootdemo/core/bootdemo.core
//= require /bootdemo/home/bootdemo.home
//= require /bootdemo/user/bootdemo.user
//= require /bootdemo/task/bootdemo.task


(function() {

    angular.module("home", [
        "ui.router",
        "bootdemo.core",
        "bootdemo.home",
        "bootdemo.user",
        "bootdemo.task"
    ])
    .directive("materialSelect", function ($timeout) {
    	
    	function link(scope, element, attrs) {
    		$timeout(function () {     		
    			element.material_select();    		
    		}, 30, false);        		
    	}
    	
    	return {
    	    link: link
    	};  	
    	       
    })  
    
}());