//= wrapped
//= require /bootdemo/core/bootdemo.core
//= require /bootdemo/user/bootdemo.user
//= require /bootdemo/index/bootdemo.index

console.log("Loaded");

(function() {

    angular.module("bootdemo", [
        "ui.router",
        "bootdemo.core",
        "bootdemo.index",
        "bootdemo.user"
    ]);

}());