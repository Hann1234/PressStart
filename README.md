# PressStart

PressStart is a full stack web application designed to connect solo gamers with a dedicated team of other solo gamers to play team based video games with.  

Recently, people have found themselves stuck inside more often with extra time on their hands.  Some people have decided to spend this time playing online video games, and there was a huge influx of players interested in squad based video games specifically.  These are team focussed games that place gamers in a small squad (team) of 2 - 5 players and pits them against other squads of different players, often to see which squad is the last standing.  Some gamers are fortunate enough to have a dedicated friend group to play with, however, for a sizable portion of the gaming community this is not the case.

A common problem for people who solo queue and get placed with random teammates is a lack of communication, loud distracting noises over the comms, or even teammates who grief which means they purposefully sabotage the team they are matched with to ruin the gaming experience for the other players. These issues can be quite frustrating and make team based gaming difficult.

The goal of PressStart is to provide a space for solo gamers to find other dedicated gamers who want to team up and play squad based video games together. Through the PressStart app, gamers can create a profile, decide a game to play, set a desired play time, and get matched with other gamers looking to play the same games around the same time. Matched players are able to share discord invite links which allows them to meet up virtually in their discord lobbies (Discord is an instant messaging/voice communication application that is popular in the gaming community).

## Setup

In order to run PressStart locally, set up a database named 'press_start' and input the SQL queries contained within the database.sql file.  PressStart can only be run locally at this time.

## Features

PressStart user interaction follows the structure below:

1. User creates a user profile providing a profile name, password, profile picture, profile description, user play style, and a discord invite link to the user's discord lobby (this link is only shared between matched users).

![User Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/profile.png)
![Edit Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/editProfile.png)


2. After logging in, the user is prompted to press the pulsing start button which will direct the user to select a game.

![Home Page](https://github.com/Hann1234/PressStart/blob/master/public/images/homePage.png)

3. The user can slide through the available games and click on the cover art of the one they wish to play.

![User Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/gameSelect1.png)
![User Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/gameSelect2.png)

4. The user is then prompted to pick a desired date and time they wish to play the selected game.  After the game and time is selected, the user profile, game, and time is now posted for other users to see.

![User Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/timeSelect1.png)
![User Profile](https://github.com/Hann1234/PressStart/blob/master/public/images/pickDateTime.png)

5. The current user is then directed to a page where they can now send other users invites to connect to their squad.
6. After invites are sent, the user can return to the home screen to edit their profile or manage their squad. The user will be alerted to pending squad invites from other users by a number badge on the 'squad' button on the home screen depending on the number of current pending invites.
7. When a user accepts an invite from another user, their discord invite links are now available to each other so they can connect virtually through the discord app and game together.

## Technologies Used:

React, Redux, Redux Saga, passport, node.js, express.js, Javascript, HTML, CSS, PostgreSQL, Postico, material.ui, sweetalert2, animate.css


<!-- 
# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 -->
