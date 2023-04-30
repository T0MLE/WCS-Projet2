![WildFitnessClub__1_-removebg-preview](https://user-images.githubusercontent.com/119880787/235344411-fbed59c8-6de0-4ce9-b7df-8ad18fce18b8.png)
<h1>***WILD FITNESS CLUB***</h1>

Our fitness application uses React and APIs to provide a personalized fitness experience to our users.
The main features of our application include:



- Customized fitness programs based on each user's preferences and goals.

- A wide selection of fitness exercises to allow each user to create a program that suits their needs.

- Healthy and balanced meals to help users maintain a healthy lifestyle and achieve their fitness goals.


We are a small team passionate about fitness and technology, and we created this application to help people achieve 
their fitness goals in an efficient and personalized way. 
We are proud of this application and we hope it will help you achieve your own fitness goals.

https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
	https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
  https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
  https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white

## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_) 
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Deployment

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- CAPROVER_BACK_APPNAME : name app on caprover
- CAPROVER_FRONT_APPNAME : name app on caprover
- CAPROVER_PASSWORD : password caprover
- CAPROVER_SERVER : link of domain
