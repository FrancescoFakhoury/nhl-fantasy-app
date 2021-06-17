<h1 align="center"> BENCHMATES </h1>

> Note: Welcome to BenchMates! This was my final Full-Stack project for my Concordia University Web Development Bootcamp. It took me approximately a week or two to create this project and I do plan on continuing to work on it (see the future updates section bellow).

> Note: This project is still under development and may have some bugs. This is an Open Source project and I would love some feedback or some simple Pull Requests if you have any suggestions on how we can Improve Benchmates as a community!

---

## What is BenchMates?

BenchMates is a NHL Fantasy App where the user can select 8 total random players from an array of NHL Teams (all of them to be exact) and add said players to the user's Fantasy team where the user can then calculate the total amount of points that his players have provided said user.

---

## Where does the data come from?

The data provided in this project was completely derived from an External API that you can find by visiting this provided link: https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md
I give full credit to said API's creator for all the information and updated statistics provided in BenchMates. 

---

## How does the login work?

The authenticator used within BenchMates is with Auth0. You can visit their website by visiting this provided link as well: https://auth0.com/ 
It is extremely safe and it allows the user to log in with their respective gmail accounts if the user wishes to do so.

---

## How to run Locally?

Here is a step by step instruction on how to run BenchMates locally:

Step 1. Please fork this project and then clone it into your IDE.

Step 2. Once you are seeing the project in your respective IDE, please install all dependencies.
> to install said dependencies, cd into each folder (both frontend and backend) and do yarn install or npm install, whichever you prefer.

Step 3. Now we have to deal with the .env files. Lets deal with the Frontend folder first. There should be a .env file in the root of this folder containing two things: 
> 1. REACT_APP_AUTH0_DOMAIN= Auth0 Domain
> 2. REACT_APP_AUTH0_CLIENT_ID= Auth0 Client ID

IMPORTANT TO NOTE: where it says Auth0 Domain and Auth0 Client ID, this is where you need to replace these words with your respective domain and Client ID from your auth0 account. 

For the Backend, there is also a .env file in the root of this folder that must contain one thing:
> 1.MONGO_URI = Mongo URI

IMPORTANT TO NOTE: same concept as the Frontend part, the Mongo URI needs to be replaced with your own MONGO URI. 

Step 4. You can now cd into each folder and use yarn dev:frontend or yarn dev:backend to open up BenchMates and run it locally!!!

---

## FUTURE UPDATES PLANNED

1. I absolutely need to rework the backend data storage as it currently is not functional for multiple users. I simply did the barebones of it in order to complete my projects MVP with the given time that I had to create this project as a whole in order to graduate.

things the backend should do: 
- be able to store a respective users team. If a new user logs in that has not been saved in Mongo, create a new collection with his team.


2. I would love to creative insight on making the visual UI better and feel less "empty", the profile page is a prime example of this. 

3. Sometimes, the react library that I use for the glassmorphism cards can have minor bugs in it where the player card bends more than it should. This happens normally when I go back and forth between components on the app. 

4. I would love to add leagues where people can then play the game with their respective friends who wish to join the BenchMates family as well. this would also involve more backend functionality.

5. I would love to learn how I can potentially optimize my code better as well. 

6. Currently, BenchMates is not mobile responsive and I would love to make that a reality as well.

---

## REST API Endpoints used.

External API
> Get - https://statsapi.web.nhl.com/api/v1/teams

> Get - https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster

> Get - https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20202021

IMPORTANT: if you wish to check these out, do not forget to replace ${team.id} and ${player.person.id} by a respective ID that will allow the endpoint to function. 

API Endpoints created for Mongo. 

> Get - /api/get-team

> Post - /api/create-team

> Delete - /api/delete-team

IMPORTANT: currently, my POST is actually also doing a update to the team itself so this is indeed a CRUD App. But as I mentioned previously, I am not proud of my backend work and I understand that it needs A LOT of help and updates. 

---

## Contributions

Contributions as previously mentioned is encouraged and I take constructive criticism extremely as. I am determined to become a far better coder than I am currently and I am confident that I can learn a lot through helpful contributions and pull requests. 

Please contact me if you wish to do so. 
