
# Unit 2 Project CareConnect Full-Stack Application

CareConnect is a full-stack safety and communication application. The Spring Boot backend provides REST APIs and MySQL data persistence, while the React frontend provides the user interface for registration, login, trusted contacts, emergency messaging, and live location sharing.

## Project Structure

- `Java-spring-boot-back-end-app/careconnect/careconnect` - Spring Boot REST API and MySQL persistence
- `React-front-end-app` - React and Vite frontend user interface

## Project Design

- [Wireframes](https://www.figma.com/design/GauCN6Gpv5o87JHm8MqE1b/Fullstack-Application?node-id=10-111&t=JgtRZj5P8sQrH8Xp-1)
- [Entity Relationship Diagram (ERD)](https://dbdiagram.io/d/CareConnect-ERD-6a989727aed2f4f6be971c46)

## Frontend User Interface

The React frontend includes the following pages and features:

- Home page introducing the CareConnect safety application
- About page explaining the application's purpose and safety features
- User registration and login forms
- Protected pages for authenticated users
- Trusted contact management, including adding, updating, and deleting contacts
- One-click safety messages and custom messages for trusted contacts
- Thank-you confirmation page after sending a message
- Live location sharing with an interactive map
- Responsive navigation header and footer
- React Router navigation using the `/Final-Project-CareConnect/` base path

The frontend communicates with the backend REST API at `http://localhost:8080` for authentication, users, trusted contacts, messages, and location updates.

## Run the Full-Stack Application Locally

### Start the Backend

1. Create the MySQL `careconnect` database.
2. Create the local file `Java-spring-boot-back-end-app/careconnect/careconnect/src/main/resources/application.properties`.
3. Add the local Spring Boot and MySQL configuration to that file.
4. Run the Spring Boot application. The backend starts at `http://localhost:8080`.

Database credentials are stored in the local `application.properties` file, which is excluded from Git using `.gitignore`.

### Start the Frontend

From the repository root, run:

```powershell
cd React-front-end-app
npm install
npm run dev
```

Open the frontend at:

`http://localhost:5173/Final-Project-CareConnect/`

Step 1: Initial Backend Project Setup

1. I created a new GitHub repository named `Final-Project-BackendUnit2-CareConnect` and cloned it to my local machine.
2. Inside the cloned repository, I created the `java-spring-boot-back-end-app` folder for the Spring Boot backend application.
3. I also created the `react-front-end-app` folder for the React frontend application.
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
49. I created a PUT endpoint to update an existing user by ID.
50. I mapped the update endpoint to:`PUT /api/users/{id}`
51. I used the `@PathVariable` annotation to receive the user ID from the URL.
52. I used the `@RequestBody` annotation to receive the updated user details as JSON.
53. I used `userRepository.findById(id)` to find the existing user.
54. I updated the user's first name, last name, mobile number, email, and password.
55. I used `userRepository.save(existingUser)` to save the updated user details in the database.
56. I tested the PUT endpoint using Postman with the following URL:`http://localhost:8080/api/users/1`
57. I confirmed that the user details were successfully updated in the database.
58. I created a DELETE endpoint to remove an existing user by ID.
59. I mapped the delete endpoint to:`DELETE /api/users/{id}`
60. I used `userRepository.existsById(id)` to check whether the user exists.
61. I used `userRepository.deleteById(id)` to delete the selected user from the database.
62. I tested the DELETE endpoint using Postman with the following URL:`http://localhost:8080/api/users/1`
63. I confirmed that the selected user was successfully deleted from the database.
64. The current backend supports the basic CRUD operations:
    Create user using POST.
    Read users using GET.
    Update user using PUT.
    Delete user using DELETE.
65. 
# Trusted Contact Model, Repository, and Controller
66. I created a `TrustedContact` entity class inside the `model` package.

67. I added the `@Entity` annotation to the `TrustedContact` class so that it could be mapped to a database table.

68. I added the following fields required for trusted contacts:
    - `id`
    - `name`
    - `mobileNumber`
    - `relationship`

69. I configured the `id` field as the primary key and used automatic ID generation.

70. I added a no-argument constructor to the `TrustedContact` entity because JPA and Hibernate require a default constructor.

71. I added getters and setters for all `TrustedContact` entity fields.

72. I created a `TrustedContactRepository` interface inside the `repository` package.

73. I extended `JpaRepository<TrustedContact, Long>` in the `TrustedContactRepository` interface.

74. By extending `JpaRepository`, I enabled built-in database operations for saving, finding, updating, and deleting trusted contacts.

75. I created a `TrustedContactController` class inside the `controller` package.

76. I added the `@RestController` annotation to the `TrustedContactController` class.

77. I added the base request mapping `/api/trusted-contacts` to the controller.

78. I injected `TrustedContactRepository` into the `TrustedContactController` using constructor injection.

79. I fixed the entity ID naming and setter method to use `id`, `getId()`, and `setId()`.

80. I verified that the Spring Boot application could detect the `TrustedContact` entity, repository, and controller successfully.

## Create and Test Trusted Contact CRUD APIs

81. I created a POST endpoint to add a new trusted contact.

82. I mapped the create endpoint to:`POST /api/trusted-contacts`

83. I used the `@RequestBody` annotation to receive trusted contact information as JSON.

84. I used `trustedContactRepository.save(contact)` to save the trusted contact details in the MySQL database.

85. I tested the POST endpoint using Postman with the following JSON request:

```json{
  "name": "Sam",
  "mobileNumber": "5551234567",
  "relationship": "Sister"
}
```
86. I created a GET endpoint to retrieve all trusted contacts.

87. I mapped the GET endpoint to:`GET /api/trusted-contacts`

88. I used `trustedContactRepository.findAll()` to retrieve all trusted contacts from the database.

89. I created a PUT endpoint to update an existing trusted contact by ID.

90. I mapped the update endpoint to:`PUT /api/trusted-contacts/{id}`

91. I used the `@PathVariable` annotation to receive the trusted contact ID from the URL.

92. I used the `@RequestBody` annotation to receive the updated trusted contact details as JSON.

93. I used `contact.setId(id)` and `trustedContactRepository.save(contact)` to update the trusted contact.

94. I tested the PUT endpoint using the following URL:`http://localhost:8080/api/trusted-contacts/1`

95. I created a DELETE endpoint to remove an existing trusted contact by ID.

96. I mapped the delete endpoint to:`DELETE /api/trusted-contacts/{id}`
97. I used `trustedContactRepository.deleteById(id)` to delete the selected trusted contact from the database.

98. I tested the DELETE endpoint using the following URL:`http://localhost:8080/api/trusted-contacts/1`

99. I confirmed that the trusted contact was successfully added, retrieved, updated, and deleted from the MySQL database.
100. The current backend supports the basic CRUD operations for trusted contacts:
     - Create a trusted contact using POST.
     - Read trusted contacts using GET.
     - Update a trusted contact using PUT.
     - Delete a trusted contact using DELETE.
     
## Message Model, DTO, Repository, and Controller

101. I created a `Message` entity class inside the `model` package.
102. I added the `@Entity` annotation to the `Message` class so that it could be mapped to a MySQL database table named `messages`.
103. I added the following fields required for storing messages:- `id`
- `trustedContactId`
- `messageText`
- `status`
- `createdAt`
104. I configured the `id` field as the primary key and used automatic ID generation.
105. I added the `@Table(name = "messages")` annotation to create and use the `messages` table.
106. I added the `@Column(nullable = false)` annotation to `messageText` so that a message cannot be saved without message text.
107. I added a no-argument constructor to the `Message` entity.
108. I added getters and setters for all `Message` entity fields.
109. I created a `MessageRequest` DTO class inside the `dto` package.
110. I added the following request fields to `MessageRequest`:`trustedContactId`&`messageText`
111. I added a no-argument constructor, getters, and setters to the `MessageRequest` DTO.
112. I created a `MessageRepository` interface inside the `repository` package.
113. I extended `JpaRepository<Message, Long>` in the `MessageRepository` interface.
114. By extending `JpaRepository`, I enabled built-in database operations for saving, finding, updating, and deleting messages.
115. I added the following custom repository method to retrieve messages for a selected trusted contact:

```java
List<Message> findByTrustedContactIdOrderByCreatedAtAsc(Long trustedContactId);
```

116. This repository method retrieves messages for one trusted contact and sorts them from oldest to newest based on `createdAt`.
117. I created a `MessageController` class inside the `controller` package.
118. I added the `@RestController` annotation to the `MessageController` class.
119. I added the base request mapping `/api/messages` to the controller.
120. I injected `MessageRepository` into the `MessageController` using constructor injection.
121. I added CORS support to allow requests from the React frontend running at `http://localhost:5173/Final-Project-CareConnect/`.
```java @CrossOrigin(origins = "http://localhost:5173")`
## Create and Test Message APIs
122. I created a POST endpoint to save a quick message or a custom message for a selected trusted contact.
123. I mapped the save-message endpoint to:`text POST /api/messages`
124. I used the `@RequestBody` annotation to receive message data as JSON through the `MessageRequest` DTO.
125. I created a new `Message` object inside the controller.
126. I saved the selected trusted contact ID using:`java message.setTrustedContactId(request.getTrustedContactId());`
127. I saved the selected or typed message text using:`java message.setMessageText(request.getMessageText());`
128. I automatically set the message status to `SAVED`.
129. I automatically stored the current date and time using `LocalDateTime.now()`.
130. I used `messageRepository.save(message)` to save the message in the MySQL `messages` table.
131. I configured the endpoint to return the saved message as an HTTP `200 OK` response.
132. I tested the message-save endpoint in Postman using:`text POST http://localhost:8080/api/messages`
133. I sent the following sample JSON request:`json {"trustedContactId": 1,"messageText": "🏠 I am at Home."}`
134. I confirmed that the message was saved successfully in the MySQL `messages` table.
135. I created a GET endpoint to retrieve all messages for one selected trusted contact.
136. I mapped the message-history endpoint to:`text GET /api/messages/trustedContact/{trustedContactId}`
137. I used the `@PathVariable` annotation to receive the selected trusted contact ID from the URL.
138. I used the custom repository method `findByTrustedContactIdOrderByCreatedAtAsc(trustedContactId)` to retrieve the messages.
139. The message-history endpoint returns messages in ascending order, from the oldest message to the newest message.
140. I tested the message-history endpoint in Postman using:`text GET http://localhost:8080/api/messages/trustedContact/1`
141. If messages exist for the selected trusted contact, the API returns a JSON array of message objects.
142. If no messages exist for the selected trusted contact, the API returns an empty JSON array:`json[]`
143. The current backend supports the following message operations:

- Save a quick or custom message for a selected trusted contact.
- Store the selected trusted contact ID with the message.
- Store the message text, status, and creation date/time.
- Retrieve message history for one trusted contact.
- Sort message history from oldest to newest.

Database credentials are stored in the local `application.properties` file, which is excluded from Git using `.gitignore`.
