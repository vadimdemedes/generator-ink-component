# generator-ink-component [![Build Status](https://travis-ci.org/vadimdemedes/generator-ink-component.svg?branch=master)](https://travis-ci.org/vadimdemedes/generator-ink-component)

> Scaffold out an [Ink](https://github.com/vadimdemedes/ink) component. Based on [generator-nm](https://github.com/sindresorhus/generator-nm) by Sindre Sorhus.


## Install

```
$ npm install --global yo generator-ink-component
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo ink-component
```

There are multiple command-line options available:

```
$ yo ink-component --help

  Usage:
    yo ink-component [options]

  Options:
    --help          # Print the generator's options and usage
    --skip-cache    # Do not remember prompt answers                      Default: false
    --skip-install  # Do not automatically install dependencies           Default: false
    --org           # Publish to a GitHub organization account
    --coverage      # Add code coverage with nyc
    --codecov       # Upload coverage to codecov.io (implies --coverage)
```

The `--org` option takes a string value (i.e. `--org=avajs`). All others are boolean flags and can be negated with the `no` prefix (i.e. `--no-codecov`). You will be prompted for any options not passed on the command-line.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
