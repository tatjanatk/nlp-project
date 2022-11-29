# nlp-project
- Natural Languange Processing Project for the Front End Web Developer course from Udacity
- Author: Tatjana
- Used technologies: HTML, Sass, JavaScript, Node (webpack, express, ...), MeaningCloud API

# Getting started
1. install **node**, if you haven't alread
2. open a new terminal (cmd)
3. check your node version: ***node -v***
4. open the project folder and copy the path
5. change the directory to the folder path: ***cd path***
6. install all npm packages you need: ***npm install***
7. get your personal API_KEY of the [MeaningCloud API](https://www.meaningcloud.com/developer/account/subscriptions)
8. insert it in the **src/server/index.js** file 
    ```javascript
    var textapi = new mcloud({
        application_key: API_KEY
    });
    ```
9. build the project: ***npm run build-prod***
10. start a local server, the website opens automatically: ***npm run build-dev***

# Website Functionality