//= wrapped

(function() {

    angular
        .module("bootdemo.user")
        .controller("UserListController", ['userService',UserListController])
        .controller("UserShowController", ['userService', 'userServiceAdmin', '$stateParams','$location',UserShowController])
        .controller("UserCreateController", ['userService', 'userServiceAdmin', 'authorityService', '$stateParams','$location', '$scope', UserCreateController])

    function UserListController(userService) {

        var self = this;
        userService.list(function(items){
            self.users = items;
        });

    }
    
    function UserShowController(userService, userServiceAdmin, $routeParams,$location){
        var self = this;
        userService.show({userId:$routeParams.userId,action:'show'},function(user){
            self.user = user;
        });
        self.delete = function(user){
            if(confirm("Are you sure you want to delete this user?")) {
            	userServiceAdmin.delete({action: 'delete',userId:$routeParams.userId}, user, function (res) {
                    $location.path("/user");

                })
            }
        }
    }

    function UserCreateController(userService, userServiceAdmin, authorityService, $routeParams, $location, $scope){
        var self = this;       
        
        authorityService.list(function(items){        	
        		$scope.authoroties = items;
        	
        });   
               
        if($routeParams.userId){
            userService.show({userId:$routeParams.userId,action:'show'},function(user){
                self.user = user;         
                $scope.selectedAuths = self.user.userAuthorities;
                
            });
        }    
        
        self.save = function(user){        	
        	if(user.userAuthorities == null){        		
        		self.user.userAuthorities = [];
        	}
        	
        	self.user.userAuthorities = $scope.selectedAuths;
        	
        	userServiceAdmin.save({action:'save',userId:null},user,function(res){            	
                if(res.id){
                    $location.path("/user/"+res.id);
                }else{
                    alert("Unknown error occured");
                }
            })
        }
        
        

    }
    


}());