//= wrapped

(function() {

    angular
        .module("bootdemo.index")
        .controller("IndexController", IndexController);

    function IndexController(applicationDataFactory, contextPath) {
        var vm = this;

        vm.contextPath = contextPath;

        $window.location.href = '/index.html'
    }

}());