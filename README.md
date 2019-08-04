# OKTA-Blog

A simple blog built using Node-Express server and React on the frontend.

The authentication is done with Okta using OIDC middleware to take care of the hard part in authentication.

Notably this project makes use of Sqlite and Sequelize , with Epilogue middleware.

## What you need

You can find a great tutorial [from Scotch.io here.][scotch]

You need `Node.js` installed in your system if you want to call yourself a web developer. On Terminal, or your favorite command line application, type `node --version` or `node -v`. This will give the version already installed in your system. If Node is not installed, you will get an error message `node: command not found.` In this case, download the [current LTS version from nodejs.org website][node website] and install it in your computer.

Use `npm` on Terminal to setup the project. Again, type `npm -v` to check the version of npm. Install the newer version or `npm` typing `npm i -g npm` on Terminal. `i` is a pro abbreviation for `install` and the flag `-g` means you are installing it globally on your computer, not just inside the current project. 

Create an new folder, navigate to it with Terminal. Type the command `npm init` and follow the prompts to setup your project. Npm creates a file `package.json`, with dependencies and script shortcuts for your project.

Alternativelly, just copy the `package.json` from this repository into your folder. Type `npm install` and npm will download and install all the dependecies for you. The file `package-lock.json` will be created with specifin information about the dependencies used, commit this file with your project. If you are looking at this, you probably know how important Github and version control is, learn how to and why to use it. So let's move on.

## Setup an account at OKTA

Head over to [OKTA website https://developers.okta.com][okta site] and set up a free account, if you don't already have one. There are paid plans, but for this simple blog, a free plan is more than enough.

User `http://localhost:3000/` as your base uri, and for Login redirect URIs use `http://localhost:3000/authorization-code/callback`. If you did your job well, you will get a `Client ID` and `ClientSecret`. You will need these numbers to connect your application to their service. Okta free service will take care of the complicated process of setting up authentication. Okta service uses OAuth/OpenID Connect protocol, and will handle longin, password reset, authentication etc, which is a great resource.

## This repo

Use the code in this repository to create your own blog. There is nothing like typing your own code to slowly ingrain the concepts of the project and writtings about it.

The backend server is build with Express, the most popular framwork for Node. You will need to setup and instal `sqlite` for the database. You will use `Sequelize` to access the data and `Epilogue` to resolve the endpoints for you.

The frontend is build on React using classes.There are lots of resources out there on using these tools mentioned here.

Have fun & enjoy.

[okta site]: https://developers.okta.com
[node website]: https://nodejs.org
[scotch]: https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes

