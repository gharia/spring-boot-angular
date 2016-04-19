# Spring Boot with Angular JS using Asset Pipeline

This is sample Spring Boot Single Page Application using Angular. The main features of this proect is asset-pipeline and bower integration.

### How to run 

  - Install Gradle plugin in your Spring Tool Suite (STS)
  - Download/clone the project. 
  - Open command prompt and go to the root location of the downloaded project. Then run following command to install bower dependencies:
  ```sh
        gradlew bowerInstall 
```
  - Once installed bower dependencies, import project in Spring Tool Suite (STS) from File > Import > Gradle (STS) Project. Note that you need to installed Gradle plugin in STS first if not installed yet. 
  - In STS, right click on the project and click on Gradle (STS) > Refresh Dependencies.
  - Now open **application.properties** file and change database replated properties as per your MySql database. Change for both spring datasource and flyway datasource.
  - Open App.java and Run as Java Application. This will start the application and you can check on http://localhost:8080

### What this project coantains

This Spring boot project web project has implementaion of simple CRUD operation of one entity User. The implementaion is based on Angular JS. So for User entity, there is a seperate folder called user under **src/assets/javascript/bootdemo**. This folder has controllers, services, directives related to User module.

Typical structure of Angular JS files for each module/entity will be as follow:
 ```sh
└── src
    └── assets
        └── javascripts
            └── bootdemo
                └── user
                    └── controllers
                    └── services
                    └── directives
                    └── bootdemo.user.js //main js file of module.
                    └── routes.js //configuring routes for this module 
```

### Tech
* [Spring Boot]
* [Spring Data JPA]
* [MySql]
* [Bower]
* [Asset Pipeline]
* [Materialize CSS]
* [Gradle]
* [Flyway]

License
----
MIT



[Spring Boot]: http://projects.spring.io/spring-boot/
[Spring Data JPA]: http://projects.spring.io/spring-data-jpa/
[MySql]: https://www.mysql.com/
[Bower]: http://bower.io/
[Asset Pipeline]: https://github.com/bertramdev/asset-pipeline/tree/master/asset-pipeline-spring-boot
[Materialize CSS]: http://materializecss.com/
[Gradle]: http://gradle.org/
[Flyway]: https://flywaydb.org/
   
