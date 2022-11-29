# nlp-project
Natural Languange Processing Project for the Front End Web Developer course from Udacity \
Author: Tatjana \
Used technologies: HTML, Sass, JavaScript, Node (webpack, express, ...), MeaningCloud API

## Dependencies
"@babel/core": "^7.20.5",\
"@babel/preset-env": "^7.20.2",\
"babel": "^6.23.0",\
"babel-loader": "^9.1.0",\
"clean-webpack-plugin": "^4.0.0",\
"css-loader": "^6.7.2",\
"css-minimizer-webpack-plugin": "^4.2.2",\
"dotenv": "^16.0.3",\
"express": "^4.18.2",\
"html-webpack-plugin": "^5.5.0",\
"mini-css-extract-plugin": "^2.7.0",\
"node-sass": "^8.0.0",\
"sass-loader": "^13.2.0",\
"style-loader": "^3.3.1",\
"webpack": "^5.75.0",\
"webpack-cli": "^5.0.0",\
"webpack-dev-server": "^4.11.1"

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