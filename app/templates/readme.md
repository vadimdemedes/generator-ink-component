# <%= repoName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>)<% if (codecov) { %> [![codecov](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=master)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %>

> <%= moduleDescription %>


## Install

```
$ npm install <%= moduleName %>
```


## Usage

```js
const {h, render} = require('ink');
const <%= camelModuleName %> = require('<%= moduleName %>');

render(<<%= camelModuleName %>/>);
```


## Props

### name

Type: `string`<br>
Default: `"Ink"`

Lorem ipsum.


## License

MIT © [<%= name %>](<%= website %>)
