# SGEHRING DESIGN 
NOTE: My goal is to be moved into wordpress...

This site uses npm, grunt, Libsass and fountation.

  * https://www.npmjs.com
  * http://gruntjs.com
  * http://libsass.org
  * http://foundation.zurb.com/docs/sass.html


## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart Front End Libraries

```bash
npm install && bower install
```

## NPM Extra Install
 * npm install grunt-bower-concat
 * npm install grunt-contrib-copy
 * npm install grunt-contrib-concat
 * npm install grunt-contrib-uglify
 
  
```bash
npm install grunt-bower-concat --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
```

While you're working on your project, run:

`grunt`

And you're set!

## CSS Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here
