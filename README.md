# Graduate-Take-Home-Test-Muhammad-Afiq-Aiman-Bin-Mohd-Nor-Azam-
This is my project assessment for Graduate Trainee position.

Mobile Application and User Registration System
This repository contains the implementation of two different parts of a project:

1. A Frontend Application (React Native/React JS/Vue JS) for user registration, login/logout, and profile management.
2. A Backend API use Node.js and frontend i use php language for user registration, login, and logout functionality with a XAMPP MySQL database.
_____________________________________________________________________________________________________________________________

PROJECT OVERVIEW
This project demonstrates how to implement user registration, login, logout, and profile management in both frontend and backend parts. The frontend provides a dummy interface with no backend connection, while the backend handles user authentication and data storage using a MySQL database.

Frontend Application (Question 1)
The frontend is a user interface that allows:
- User Registration: Allows new users to create an account.
- Login & Logout: Allows users to sign in and sign out of the system.
- User Profile: Displays the user profile, with an option to update the "About Me" section.
- "About Me" Section: A text area where users can write a bio, with the option to save it as a draft or submit it.

Backend Application (Question 2)
The backend implements:
- User Registration: Allows users to create an account and store their details in a MySQL database.
- User Login: Allows users to log in using the credentials stored in the database.
- Logout: Allows users to log out of the system, invalidating the session.
- MySQL Database: Stores user credentials securely.
_____________________________________________________________________________________________________________________________
FRONTEND APPLICATION

Features
- User Registration screen for signing up with basic information (email, password).
- Login screen for users to sign in with their credentials.
- User Profile screen to update and save the "About Me" section as a draft or submit it.

Technologies Used:
- React Native (or React JS/Vue JS)
- State Management (use of React hooks or Vuex for state management)
- UI Libraries (e.g., Material UI, Bootstrap for styling)
- No Backend Connection: The application works as a dummy interface, meaning there are no actual calls to the backend.

Structure:
-src/components: Contains all UI components like ABOUTME, PROFILE, REGISTRATION & SIGNON
- App.js: Main entry point for the application.
____________________________________________________________________________________________________________________________

Backend Application

Features:
- User Registration: Allows new users to sign up with an email and password.
- User Login: Users can log in using their registered email and password.
- Logout: Invalidates the user session upon logging out.
- MySQL Database: Stores user information in a relational database.

Technologies Used:
- Node.js AND PHP(FRONTEND)
- MySQL Database (xampp): Stores user credentials and other relevant information.
- Express.js (for Node.js) or laravel (for PHP): Web frameworks to handle HTTP requests.
- Database:
  users table in MySQL with fields like id, email, password, about_me.

Structure:
- server.js or app.py: Main backend file that handles routes for registration, login, and logout.
- controllers: Contains logic for registration, login, and logout functionality.
- models: Contains the MySQL model definitions and database interaction.
- config: Database configuration (MySQL connection).
_____________________________________________________________________________________________________________________________

