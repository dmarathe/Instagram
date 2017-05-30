# Instagram 
Instagram Web UI using AngularJS 1 with following features
1. post stream -
    - Add Comments for pic
    - like and unlike the post
    - Display comments in batch of 3 with load more oprion 
    
2. User profile
    - User info with image grid 
    - Display count of likes and number of comments on hover

## Setup
1. Run 'npm install'
2. Run 'bower install'
3. run './node_modules/.bin/gulp' for dev or run 'npm run dev-start'
  It will run live server. It will generate css from scss and if you make any change in app folder it will reload browser.

## For release build:
4.run './node_modules/.bin/gulp build'
It will minify and concat css and js files and copy it into  dist folder.

## Demo
![](instagram.gif)



