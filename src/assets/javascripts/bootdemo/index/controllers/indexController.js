//= wrapped

(function() {

    angular
        .module("bootdemo.index")
        .controller("IndexController", IndexController);

    function IndexController(contextPath) {
        var vm = this;

        vm.contextPath = contextPath;
        
    }

}());