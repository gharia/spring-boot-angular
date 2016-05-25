//= wrapped

(function() {

    angular
        .module("bootdemo.task")
        .controller("TaskListController", ['taskService',TaskListController])
        .controller("TaskShowController", ['taskService', 'taskServiceAdmin', '$stateParams','$location',TaskShowController])
        .controller("TaskCreateController", ['taskService', 'taskServiceAdmin', '$stateParams','$location', '$scope', TaskCreateController])

    function TaskListController(taskService) {

        var self = this;
        taskService.list(function(items){
            self.tasks = items;
        });

    }
    function TaskShowController(taskService, taskServiceAdmin, $routeParams,$location){
        var self = this;
        taskService.show({taskId:$routeParams.taskId,action:'show'},function(task){
            self.task = task;
        });
        self.delete = function(task){
            if(confirm("Are you sure you want to delete this task?")) {
            	taskServiceAdmin.delete({action: 'delete',taskId:$routeParams.taskId}, task, function (res) {
                    $location.path("/task");

                })
            }
        }
    }

    function TaskCreateController(taskService, taskServiceAdmin, $routeParams,$location, $scope){
        var self = this;
        if($routeParams.taskId){
            taskService.show({taskId:$routeParams.taskId,action:'show'},function(task){
                self.task = task;
            });
        }
        self.save = function(task){
            
        	taskServiceAdmin.save({action:'save',taskId:null},task,function(res){
                if(res.id){
                    $location.path("/task/"+res.id);
                }else{
                    alert("Unknown error occured");
                }
            })
        }

    }

}());