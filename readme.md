#Bilgi Shuttle Web Application

[![Build Status](https://travis-ci.org/LaborWorks/bilgi-shuttle-web.svg?branch=master)](https://travis-ci.org/LaborWorks/bilgi-shuttle-web)
[![Coverage Status](https://coveralls.io/repos/github/bilgishuttle/bilgi-shuttle-web/badge.svg?branch=master)](https://coveralls.io/github/bilgishuttle/bilgi-shuttle-web?branch=master)
[![David](https://img.shields.io/david/LaborWorks/bilgi-shuttle-web.svg?maxAge=2592000)](https://github.com/LaborWorks/bilgi-shuttle-web/blob/master/package.json)
[![David](https://img.shields.io/david/dev/LaborWorks/bilgi-shuttle-web.svg?maxAge=2592000)](https://github.com/LaborWorks/bilgi-shuttle-web/blob/master/package.json)
[![Hex.pm](https://img.shields.io/hexpm/l/plug.svg?maxAge=2592000)](https://github.com/LaborWorks/bilgi-shuttle-web)

Basic but useful cross-platform application for listing the shuttle routes and times of İstanbul Bilgi University.

Data comes from [bilgi-shuttle-api](https://github.com/LaborWorks/bilgi-shuttle-api/), processed and shown in this application.

- iOS version: [bilgi-shuttle-ios](https://github.com/LaborWorks/bilgi-shuttle-ios)
- Android version: [bilgi-shuttle-android](https://github.com/LaborWorks/bilgi-shuttle-android)

##About
Bilgi Shuttle Web uses

- TypeScript flavored [React](https://facebook.github.io/react/) with [React-Router]().

- [Redux](https://github.com/reactjs/redux) as the data layer, with the assistance of libraries like [react-router-redux](), [redux-thunk]() and [redux-logger]().

- Polyfill of the native Fetch API, [whatwg-fetch](https://github.com/github/fetch) for async data loading.

- [React Bootstrap](https://github.com/react-bootstrap) for styling.

- [Karma](https://github.com/karma-runner/karma), [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) as the core of testing libraries.

- [Enzyme](https://github.com/airbnb/enzyme) for testing React Components.

- [fetch-mock](https://github.com/wheresrhys/fetch-mock) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) for testing Redux Modules.

- [istanbul](https://github.com/gotwarlost/istanbul) for generating code coverage reports.

- [Travis](http://travis-ci.org) and [Coveralls](http://coveralls.io) as CI tools.


##Installation
```bash
# Install node (or update if you have an older version, I use v6.2.0 atm)
https://nodejs.org/

# Clone the repository
$ git clone https://github.com/bilgishuttle/bilgi-shuttle-web.git

# Go to app folder
$ cd bilgi-shuttle-web

# Install node_modules and type definitions
$ npm run setup
```

##Usage
```bash
# Start for development
$ npm start

# Application will be served on http://localhost:3000

# Run unit tests
$ npm test

# Build the dist version and copy static files
$ npm run build
```

##Screenshots
<img src="screenshots/bs_web_01.png" width="100%">
<img src="screenshots/bs_web_02.png" width="49.5%">
<img src="screenshots/bs_web_03.png" width="49.5%">


##License

	Copyright [2016] [Altay Aydemir]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
