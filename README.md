# ngft node sample
A node.js with express simple app. A review of the tasked assigned

## Setup

Download code:

```sh
$ git clone https://github.com/gianmichelesiano/ngft-node-express.git
$ cd ngft-node-express
$ cd npm install
```

Then install the dependencies:

```sh
$ cd ngft-node-express
$ cd npm install
```

Run app:
```sh
node node-sample.js
```
Defoult port 5000, but you can set a env variable.
And navigate to http://127.0.0.1:5000

## Review and Improvment for avoid security problem:
I review the app and and changed it to a working version. Below you can find the most important changes  
- Use configuration files and environment variable for protect sensitive data (db, user, password)  
- Change the query to db wiht one to prevent SQL Injection attacks.
- Create a connection to db, in the original code there is no create connection method
- Delete "create Request object". 

## Suggestion for production:
- Create an environment variables for divide the dev-env to prod-env
- Not provide hardcode sensitive data like db-connection, password, secret key
- Minimize the amount of logging and not track data to avoid security problem
- Use a package to protect against well known vulnerabilities (for node,express is available Helmet)
- Always test before deploying
- Use a Control Version repository
- Create a pipeline for Automatic Deployment
- Create a containers of the applications
- Build an orchestration process 
- Mantain the app with related libraries up to date
- Design a backup and disaster recovery plan