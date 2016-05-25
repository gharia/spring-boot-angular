//= wrapped

(function() {

    angular
        .module("bootdemo.user")
        .factory("userService", userService)
        .factory("userServiceAdmin", userServiceAdmin)
        .factory("authorityService", authorityService);

    function authorityService(DomainServiceFactory) {    	
    	return DomainServiceFactory('/authority/:action/:authId',{authId:'@id',action:'@action'},    		
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );    	        
    }
    
    function userService(DomainServiceFactory) {
        return DomainServiceFactory('/user/:action/:userId',{userId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }
    
    /**
     * For admin access. URL is different. The reason for creating new service is angular resource does not
     * handled '/' in url when passed in action. so if I pass admin/save from controller then it will be /admin%2Fsave
     * check https://github.com/angular/angular.js/issues/1388#issue-6979382
     */
    function userServiceAdmin(DomainServiceFactory) {
        return DomainServiceFactory('/user/admin/:action/:userId',{userId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }
    

}());