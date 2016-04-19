//= wrapped
//= require /angular/angular
//= require /bootdemo/core/bootdemo.core
//= require /bootdemo/index/bootdemo.index
//= require /bootdemo/user/bootdemo.user

console.log("Loaded");

(function() {

    angular.module("bootdemo", [
        "ngRoute",
        "bootdemo.core",
        "bootdemo.index",
        "bootdemo.user"
    ]);

}());