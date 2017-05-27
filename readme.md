1. Run 'npm install'
2. run './node_modules/.bin/gulp' for dev
  It will run live server. It will generate css from scss and if you make any change in app folder it will reload browser.

For build:
run './node_modules/.bin/gulp build'
It will minify and concat css and js files and copy it into  dist folder.
The order will be preserve in concatenation. Only requirement is add js files within :
<!--build:js js/main.min.js -->
  between this
<!-- endbuild -->

<!--build:css css/styles.min.css-->
  css file here the order in which you want to add
<!--endbuild-->

Happy coding :)

