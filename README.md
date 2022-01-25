# bad-radiation

NoSQL: Social network API

## Description:

-- Simple NoSQL social networking app that lets you create/read/update/delete users/thoughts and lets you add other users to your friends list
-- Also lets you post a reaction to the users thoughts

## Screenshots:



## Walkthrough video
[Walkthrough Video](https://watch.screencastify.com/v/JNrLxEnuf7TGhXYBAiX6)

## Installation Instructions:

-- Download repository from github
-- Open terminal and run npm install to install the dependencies
-- Then run node server.js to start server
-- To use open insomnia and then use the user/thought routes to run 

## Table of Contents

- [Description](#description)
- [License](#license)
- [Contact Me](#contact)
- [Github](#github)
- [Contributors](#contribution)
- [Instillation](#install)

## Github

-- [Plaindemon](https://github.com/plaindemon)

## Languages used:

-- Language:
    -- javascript


## Project Contributors:

-- plaindemon 

## Contact for code questions or inquiries

-- Email:bchaplin525@gmail.com
-- Github: [Plaindemon](https://github.com/plaindemon)

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
