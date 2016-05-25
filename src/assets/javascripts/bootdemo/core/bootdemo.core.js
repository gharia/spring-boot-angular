//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /angular/angular-ui-router
//= require /angular/angular-cookies
//= require_self
//= require_tree services

(function() {

    angular.module("bootdemo.core", ['ngResource', 'ui.router', 'ngCookies'])
        .constant("contextPath", window.contextPath)
        .config(config);

    function config($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        $httpProvider.interceptors.push(httpRequestInterceptor);
    }

    function httpRequestInterceptor(contextPath) {
        return {
            request: function (config) {
                if (!config.url.indexOf("/") == 0 && contextPath) {
                    config.url = contextPath + "/" + config.url;
                }
                return config;
            }
        };
    }
}());