//= wrapped

(function() {

    angular
        .module("bootdemo.user")
        .controller("UserListController", ['userService',UserListController])
        .controller("UserShowController", ['userService','$stateParams','$location',UserShowController])
        .controller("UserCreateController", ['userService','$stateParams','$location', '$scope', UserCreateController])

    function UserListController(userService) {

        var self = this;
        userService.list(function(items){
            self.users = items;
        });

    }
    function UserShowController(userService,$routeParams,$location){
        var self = this;
        userService.show({userId:$routeParams.userId,action:'show'},function(user){
            self.user = user;
        });
        self.delete = function(user){
            if(confirm("Are you sure you want to delete this user?")) {
                userService.delete({action: 'delete',userId:$routeParams.userId}, user, function (res) {
                    $location.path("/user");

                })
            }
        }
    }

    function UserCreateController(userService,$routeParams,$location, $scope){
        var self = this;
        if($routeParams.userId){
            userService.show({userId:$routeParams.userId,action:'show'},function(user){
                self.user = user;
            });
        }
        self.save = function(user){
            
            userService.save({action:'save',userId:null},user,function(res){
                if(res.id){
                    $location.path("/user/"+res.id);
                }else{
                    alert("Unknown error occured");
                }
            })
        }

    }

}());