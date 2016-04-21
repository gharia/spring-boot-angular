# Spring Boot with Angular JS using Asset Pipeline

This is sample Spring Boot Single Page Application using Angular. The main features of this proect are [Asset Pipeline] and [Bower] integration.

### Prerequisites
- [JDK 1.8]
- [Spring Tool Suite]
- [MySql]

### How to run 

  - Download/clone the project. 
  - Open command prompt and go to the root location of the downloaded project. Then run following command to install bower dependencies:
```sh
        gradlew clientInstall 
```
  - Once installed bower dependencies, import project in Spring Tool Suite (STS) from File > Import > Gradle (STS) Project. Note that you need to install Gradle plugin in STS first if not installed yet. 
  - In STS, right click on the project and click on Gradle (STS) > Refresh Dependencies.
  - Now open **application.properties** file and change database related properties as per your [MySql] database. Change for both spring datasource and [flyway] datasource. Also create a databse with name you have specified in **application.properties**. In this demo I have named database as demo.
  - Open **App.java** and Run as **Java Application**. This will start the application and you can check on http://localhost:8080
  - Note that, when you run the app for first time, [Flyway] will create tables for you by executing **V1__create_db.sql** placed in resources/db/migration.

### What this project coantains

This Spring boot web project has implementaion of simple CRUD operation of one entity User. The implementaion is based on Angular JS. So for User entity, there is a seperate folder called user under **src/assets/javascript/bootdemo**. This folder has controllers, services, directives etc related to User module.

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

### Reference
[Spring Boot Asset Pipeline Gradle Adapter]
[Client Dependencies Gradle Plugin]

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
[Spring Boot Asset Pipeline Gradle Adapter]: https://github.com/bertramdev/asset-pipeline/tree/master/asset-pipeline-spring-boot  
[Client Dependencies Gradle Plugin]:https://github.com/craigburke/client-dependencies-gradle
[Spring Tool Suite]:https://spring.io/tools
[JDK 1.8]: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
[MySql]: https://www.mysql.com/
