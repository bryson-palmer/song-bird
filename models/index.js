/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-multi-spaces */
/* eslint-disable prettier/prettier */
"use strict";

// eslint-disable-next-line no-var
var fs        = require("fs");
// eslint-disable-next-line no-var
var path      = require("path");
// eslint-disable-next-line no-var
var Sequelize = require("sequelize");
// eslint-disable-next-line no-var
var basename  = path.basename(module.filename);
// eslint-disable-next-line no-var
var env       = process.env.NODE_ENV || "development";
// eslint-disable-next-line no-var
var config    = require(__dirname + "/../config/config.json")[env];
// eslint-disable-next-line no-var
var db        = {};

if (config.use_env_variable) {
  // eslint-disable-next-line vars-on-top
  // eslint-disable-next-line no-var
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  // eslint-disable-next-line prefer-arrow-callback
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  // eslint-disable-next-line prefer-arrow-callback
  .forEach(function(file) {
    // eslint-disable-next-line dot-notation
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

// eslint-disable-next-line prefer-arrow-callback
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
