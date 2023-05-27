<img src="https://github.com/Omcci/WCS-Projet2/assets/119880787/6c047dbe-62a8-4f91-a7d0-9f56ac2aa474" width=25% align="right">


<span style="display: inline-block; font-size: 50px;"><h1>[WILD FITNESS CLUB](https://astounding-gingersnap-8d73ac.netlify.app)</h1></span>



[Click here to visit the app](https://astounding-gingersnap-8d73ac.netlify.app)

Our fitness application uses React and APIs to provide a personalized fitness experience to our users.
The main features of our application include:



- Customized fitness programs based on each user's preferences and goals.

- A wide selection of fitness exercises to allow each user to create a program that suits their needs.

- Healthy and balanced meals to help users maintain a healthy lifestyle and achieve their fitness goals.


We are a small team passionate about fitness and technology, and we created this application to help people achieve 
their fitness goals in an efficient and personalized way. 
We are proud of this application and we hope it will help you achieve your own fitness goals.

It's also responsive and here is the desktop version : 

<img width=20% alt="homepagep2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/e2b3552e-0b02-40f9-8831-55f6705f3a7f">
<img width=20% alt="programp2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/72cf716e-ea0c-4b70-bd53-6d0bb2eb9404">
<img width=20% alt="exercisep2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/a93def61-def9-406a-9477-b53837673d0b">
<img width=20% alt="nutritionpagep2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/12d53f1a-51a6-4fc0-a3d5-da3508266ea0">
<img width=20% alt="recipep2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/53e1d2e2-e50a-4dd6-a399-6a99d59c3062">
<img width=20% alt="dashboardp2" src="https://github.com/Omcci/WCS-Projet2/assets/119880787/dfbe4512-38fb-40d9-a069-ce674451c816">

  
    
    
Built with :  
  
[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) 

[![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) 

  [![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) 
  
  [![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
  

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

[![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
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
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced 
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide 
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Deployment

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- CAPROVER_BACK_APPNAME : name app on caprover
- CAPROVER_FRONT_APPNAME : name app on caprover
- CAPROVER_PASSWORD : password caprover
- CAPROVER_SERVER : link of domain

![WildFitnessClub__1_-removebg-preview](https://user-images.githubusercontent.com/119880787/235344411-fbed59c8-6de0-4ce9-b7df-8ad18fce18b8.png)
