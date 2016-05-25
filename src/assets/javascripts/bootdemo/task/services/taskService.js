//= wrapped

(function() {

    angular
        .module("bootdemo.task")
        .factory("taskService", taskService)
        .factory("taskServiceAdmin", taskServiceAdmin);

    function taskService(DomainServiceFactory) {
        return DomainServiceFactory('/task/:action/:taskId',{taskId:'@id',action:'@action'},
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
    function taskServiceAdmin(DomainServiceFactory) {
        return DomainServiceFactory('/task/admin/:action/:taskId',{taskId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }

}());