# reactjs-timepicker

![reactjs timepicker](https://raw.githubusercontent.com/jsh1400/reactjs-timepicker/master/docs/reactjs-timepicker.png)

react js timepicker online [Demo](https://jsh1400.github.io/reactjs-timepicker/)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]



```
npm i reactjs-timepicker
```

```javascript

import JTimepicker from 'reactjs-timepicker'

// your component details ...
render() {
  <JTimepicker
	onChange={console.log}
 />
}

```
### props
|props|type|default|
|-----|----|-------------|
|defaultTime|string|'00:00'|
|onChange|function|(time)=>time|
|inputVisible|boolean|false|
|color|string|'#000066'|
|size|number|30|
|className|string|''|
|style|object|{}|
    




[license-image]: http://img.shields.io/npm/l/reactjs-timepicker.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/reactjs-timepicker
[npm-version-image]: http://img.shields.io/npm/v/reactjs-timepicker.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/reactjs-timepicker.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/reactjs-timepicker.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/reactjs-timepicker?minimal=true

[travis-url]: http://travis-ci.org/jsh1400/reactjs-timepicker
[travis-image]: http://img.shields.io/travis/jsh1400/reactjs-timepicker/develop.svg?style=flat
