# C4C Challenge

## Overview
This is my implementation of a message board using Spring Boot for the backend and React for the frontend. 
The backend makes use of an H2 database to store posts on the message board and it uses a file to save data between restarts. 
The frontend queries the backend endpoint to retrieve all of the posted messages in order from most to least recent and display them for all users. 

## Features
- Users can view all posts on the message board (sorted by recency)
- Users can add a new post to the message board using the UI at `localhost:3000`
    - You can also send a POST request to `localhost:8080/posts` with a json consisting of a `"message"` field
    - All messages must be between 1 and 128 characters, this is enforced in the backend and a warning is displayed by the frontend if a message is invalid
- The message board will update every 1 second when it queries the backend endpoint, allowing users to see whenever a new message is sent

## Components
### Backend
- PostController: this class provides the REST endpoints used by the frontend to both `retrieve all posts` and also `create a new post` and save it to the database using `PostRepository`.
- PostRepository: this interface implements the JpaRepository interface and stores objects of type `Post` with an id of type Long. The file used for the database storage is located at `data/message-data.mv.db`
- Post: this class represents a post on the message board. It has an auto-generated `postId` field, a `message` field containing the contents of the post, and a `timestamp` field describing when the post was created.
- ValidMessageConstraint: provides an annotation interface to validate the `message` field using the `MessageValidator` class.
- MessageValidator: this class contains the `isValid()` method which will ensure a `message` string is not null and has a length > 0 and <= 128.

### Frontend
- App.js
  - Runs the `fetchPosts()` function every 1 second to fetch all posts from the backend database
  - Passes the post data as a prop to a new `Board` component
- Board.js
  - Handles user input, displays error if the message length is invalid as determined by the backend
  - Contains the message board where it maps each post from its props to a new `Post` component
- Post.js
  - Displays the post's message along with its formatted timestamp
- App.css
  - Contains all the formatting for the frontend components and sections


## Setup
1. Clone this repository to your computer
2. Open the folder in IntelliJ and navigate to `src/main/java/com/c4c/challenge/ChallengeApplication.java`
3. Run the main method to start the backend at `localhost:8080`
4. Open a terminal with `npm` installed and navigate to `app/` from the repository root using `cd app`
5. Run the command `npm start` to start the frontend at `localhost:3000`, a browser window should open automatically. If there is an error try running `npm i` and then `npm start` again
6. Enjoy!
