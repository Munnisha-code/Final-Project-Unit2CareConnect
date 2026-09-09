
Unit 2 Project CareConnect Backend

Step 1: Initial Backend Project Setup

1. I created a new GitHub repository named `Final-Project-BackendUnit2-CareConnect` and cloned it to my local machine.
2. Inside the cloned repository, I created the `java-spring-boot-back-end-app` folder for the Spring Boot backend application.
3. I also created the `react-front-end-app` folder for the frontend application, which will be developed later.
4. I opened Spring Initializer and created a new Java Spring Boot project.
5. I added the following dependencies to the Spring Boot project:
   Spring Web
   Spring Boot DevTools
   Spring Data JPA
   MySQL Driver
6. I generated and downloaded the Spring Boot project as a ZIP file.
7. I extracted the ZIP file and placed the extracted project files inside the `java-spring-boot-back-end-app` folder.
8. I opened the `java-spring-boot-back-end-app` project in IntelliJ IDEA.
9. I configured the required JDK and loaded the Maven dependencies.
10. I opened MySQL Workbench and created a new database schema named `careconnect`.
11. I opened the `application.properties` file in IntelliJ IDEA and configured the Spring Boot application to connect to the MySQL database.
12. I added the MySQL database URL, username, and password to the `application.properties` file.
13. I configured JPA and Hibernate settings, including automatic schema updates and SQL query display.
14. I ran the Spring Boot application in IntelliJ IDEA.
15. The Tomcat server started successfully, confirming that the initial backend setup was completed.

Step 2: Create User Model, Repository, and Controller

16.I created a `User` entity class inside the `model` package. 
17.I added the `@Entity` annotation to the `User` class so that it could be mapped to a database table and
I added the user fields required for registration:
    - `id`
    - `firstName`
    - `lastName`
    - `mobileNumber`
    - `email`
    - `password`
18. I configured the `id` field as the primary key and used auto-generation for the ID.
19. I added getters and setters for the User entity fields.
20. I added a no-argument constructor to the `User` entity because JPA and Hibernate require a default constructor to create entity objects.
21. I created a `UserRepository` interface inside the `repository` package.
22. I extended `JpaRepository<User, Long>` in the `UserRepository` interface.
23. By extending `JpaRepository`, I enabled built-in database operations such as saving, finding, updating, and deleting users.
24. I created a `UserController` class inside the `controller` package.
25. I added the `@RestController` annotation to the `UserController` class.
26. I added the base request mapping `/api/users` to the controller.
27. I injected `UserRepository` into the `UserController` using constructor injection.
28. I verified that the Spring Boot application could detect the User entity, repository, and controller successfully.

## Step 3: Create and Test User Registration and Retrieval APIs

29. I created a POST endpoint for registering a new user.
30. I mapped the registration endpoint to:`POST /api/users/register`
31. I used the `@RequestBody` annotation to receive user information as JSON.
32. I used `userRepository.save(user)` to save the user details in the MySQL database.
33. I configured the endpoint to return an HTTP `201 Created` response after successfully creating a user.
34. I created a GET endpoint to retrieve all registered users.
35. I mapped the GET endpoint to: `GET /api/users`
36. I used `userRepository.findAll()` to retrieve all users from the database.
37. I tested the POST registration endpoint using Postman.
38. I created a Postman collection named `CareConnect API`.
39. Inside the collection, I created a `Users` folder.
40. I saved the `Register User` POST request inside the `Users` folder.

41. I sent the following sample JSON request through Postman:
 json
    {
      "firstName": "Munni",
      "lastName": "Test",
      "mobileNumber": "5551234567",
      "email": "munni@example.com",
      "password": "Care123"
    } 
42. I confirmed that the user was successfully saved in the MySQL database.
43. I created and saved a `Get All Users` GET request inside the `Users` folder.
44. I sent a GET request to:`http://localhost:8080/api/users`
45. I fixed the missing default constructor error in the User entity by adding a public no-argument constructor.
46. I restarted the Spring Boot application and successfully retrieved the registered users through the GET endpoint.
47. I committed the POST registration feature to Git with the message:`Add user registration POST endpoint`
48. I committed the GET users feature to Git with the message:`Add get all users endpoint`