# grunt-cssbeautifier

[cssbeautify.com](http://cssbeautify.com/) for grunt

## Getting Started
This plugin recommends using Grunt `~0.4.1`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Grunt `~0.4.1`
```
npm install grunt-cssbeautifier --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-cssbeautifier');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Config
- cssbeautifier
  - files (required): Your source files to beautify
  - options (optional): Overwrite default cssbeautifier options

### - Minimum config
```
cssbeautifier : {
  files : ["src/**/*.css"]
}
```

Default options from [cssbeautify](https://github.com/senchalabs/cssbeautify) will be used

### - Default options
```
cssbeautifier : {
  files : ["src/**/*.css"],
  options : {
    indent: '  ',
    openbrace: 'end-of-line',
    autosemicolon: false
  }
}
```
Only specifiy options to overwrite

## Release History
* 0.1.0: Initial version.
