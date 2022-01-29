![Sequelize Logo](https://raw.githubusercontent.com/sequelize/sequelize/HEAD/docs/images/logo-small.png "Sequelize")

# Sequelize! 
## This is a API made with Sequelize...

### More about Sequelize here:

- https://sequelize.org/

#### What is Sequelize?
>> It is a ORM (Object Relational Mapping)
>> that is basically a way to handle a database in a specific programing language,
>> in this case, in NodeJs! 

### How to install it?

```sh
npm install sequelize sequelize-cli path
```

#### And you will need to install one of this databases:


```sh
npm i pg pg-hstore # Postgres
npm i mysql2
npm i mariadb
npm i sqlite3
npm i tedious # Microsoft SQL Server
npm i ibm_db #DB2
```

### What comes next?

Create your CRUDS and have fun!

#### Documentation:

See more About Sequelize [clicking here!](https://link-url-here.org)

---

## How to get Started


### Init

```sh
npx sequelize-cli init
```
It creates the basic MVC structure of the project and some files to config sequelize


### Config
Now you need to create a file ```.sequelizers``` to config the folders that will be listened

This new file will help you, if you do not want to follow the exact same structure of MVC, mainly if you are a Rebel...

And Now copy and paste this content:

```sh
// .sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('./api/config', 'database.json'),
  'models-path': path.resolve('db', './api/models'),
  'seeders-path': path.resolve('db', './api/seeders'),
  'migrations-path': path.resolve('db', './api/migrations')
};
```

### Database using MySQL
If you use a Unix System, let's create a new database

Where is root you need to put your MySQL user:

#### Two cases:


##### Do not have a password:

```sh
sudo mysql -u root 
```

#### Have a password:

```sh
sudo mysql -u root -p
Enter password: 1234
```

#### Creating a database

After the previous steps you are in MySQL terminal, so enter:

```sh
mysql> create database name_of_your_database;
```
