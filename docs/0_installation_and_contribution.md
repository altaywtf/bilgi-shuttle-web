#Installation & Contribution

##Installation
```bash
# Install node & npm
https://nodejs.org/

# Clone the repository
$ git clone https://github.com/zebrasinpyjamas/bilgi-shuttle-webapp.git

# Go to app folder
$ cd bilgi-shuttle-webapp

# Run npm install
$ npm install
```

##Contribution
```bash
# Installing libraries with Bower (bower_components --> src/vendor)
$ npm install -g bower
$ bower install <package_name>

# Generating React Components with Yeoman
$ npm install -g yo
$ yo react-webpack:component my/namespaced/components/name
```

##Usage
```bash
# Start for development
$ npm start # or
$ npm run serve

# Application will be served on 
http://localhost:8080

# Using React-Hot-Loader (Similar to LiveReload)
http://localhost:8080/webpack-dev-server

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