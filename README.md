MONGODB_URL= mongodb://localhost:27017/{databaseName}

PORT= where you want to serve your backend

JWT_SECRET= ""


CLIENT_URL = "http://localhost:3000"

put all the information in a .env file and install it 
by npm i dotenv


how to chat in this app
============================
1. Signup a new user


2. the signup another user


3. find the user by email or name


4. then click on that user and start to chat 


5. logout to go to the home page


Either you can use it via guest login 
===========================================



Assignment Statement
=====================================
The aim was to develop a scalable and secure web chatting application with real-time communication features. The features included are following :

1. Authentication:

 Implemented secure user authentication using JWT (JSON Web Tokens) for user sessions. This ensured that only authorized users could access the chat features.


2. Real-time Communication: 

Utilized socket.io to facilitate real-time messaging between users. This allowed messages to be sent and received instantly, creating a seamless chatting experience.


3. User-friendly Interface:

 Designed a clean and intuitive user interface using React.js. The interface included features such as one-on-one chat, group chat, searching for users or groups, and notifications for new messages.



Problems Faced:
================================
When deploying the website on Render and using MongoDB Atlas as the database, i have encountered issues related to IP addresses. That's why i can't make it live. But in future if it's important i will fix it.