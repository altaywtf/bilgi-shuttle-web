#Bilgi Shuttle Web Application

Basic but useful application for listing the shuttle routes and times of İstanbul Bilgi University, built with [React](https://facebook.github.io/react/).

The data comes from [bilgi-shuttle-api](https://github.com/mdegis/bilgi-shuttle/), processed and shown in this application.

##Installation
```bash
# Install node & npm (or update if you have an older version)
https://nodejs.org/

# Clone the repository
$ git clone https://github.com/zebrasinpyjamas/bilgi-shuttle-webapp.git

# Go to app folder
$ cd bilgi-shuttle-webapp

# Run npm install
$ npm install
```

##Usage
```bash
# Note that bilgi-shuttle-api should be running at the same time with this app to get shuttle data.

# Start for development
$ npm start # or
$ npm run serve

# Application will be served on 
http://localhost:8080

# Using React-Hot-Loader (Similar to LiveReload)
http://localhost:8080/webpack-dev-server

# Show all locations
http://localhost:8080/#/

# Show specific location (santral, dolapdere, kustepe, kabatas, mecidiyekoy, halicioglu, pangalti)
http://localhost:8080/#/location:<name>

# Start the dev-server with the dist version
$ npm run serve:dist

# Just build the dist version and copy static files
$ npm run dist

# Run unit tests
$ npm test

# Lint all files in src (also automatically done AFTER tests are run)
$ npm run lint

# Clean up the dist directory
$ npm run clean

# Just copy the static assets
$ npm run copy
```

```bash
# Installing libraries with Bower (bower_components --> src/vendor)
$ npm install -g bower
$ bower install <package_name>

# Generating React Components with Yeoman (not quite necessary)
$ npm install -g yo
$ yo react-webpack:component my/namespaced/components/name
```

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