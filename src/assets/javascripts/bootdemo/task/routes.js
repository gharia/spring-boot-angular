//= wrapped
(function() {
    
    
    angular.module("bootdemo.task")
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('task', {
					url: "/task",
					templateUrl: '/assets/bootdemo/task/templates/task.html',
					controller: "TaskListController as ctrl"	
				})
				.state('task-create', {
					url: "/task/create",
					templateUrl: '/assets/bootdemo/task/templates/create.html',
					controller: "TaskCreateController as ctrl"	
				})
				.state('task-edit', {
					url: "/task/edit/:taskId",
					templateUrl: '/assets/bootdemo/task/templates/create.html',
					controller: "TaskCreateController as ctrl"	
				})
				.state('task-show', {
					url: "/task/:taskId",
					templateUrl: '/assets/bootdemo/task/templates/show.html',
					controller: "TaskShowController as ctrl"	
				})
		});

}());