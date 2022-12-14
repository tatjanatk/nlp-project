# Project Description
Natural Languange Processing Project for the Front End Web Developer course from Udacity \
Author: Tatjana \
Used technologies: HTML, Sass, JavaScript, Node, Express, Webpack, Jest, Workbox, MeaningCloud API \
\
This project allows you to insert any URL to get information about the text, the MeaningCloud API finds on it. It will show a text excerpt, the polarity, agreement, subjectivity, irony and confidence of the text found on the webpage.

# Getting started
1. install **node.js**, if you haven't already
2. open a new terminal (cmd)
3. check your node version: `node -v`
4. open the project folder and copy the path
5. change the directory to the folder path: `cd path`
6. install all npm packages you need: `npm install`
7. get your personal API_KEY of the [MeaningCloud API](https://www.meaningcloud.com/developer/account/subscriptions)
8. rename the ***.env_sample*** file to ***.env*** and insert your personal API Key.
    ```javascript
        API_KEY=*************
    ```
9. build the project: `npm run build-prod`
10. start a local server: `npm run start`
11. open your browser and navigate to ***http://localhost:8081/***

## other modes
* `npm run test` - testing of some functions
* `npm run build-dev` - development mode on ***http://localhost:8080/*** to start a live server to see changes without having to build the project again