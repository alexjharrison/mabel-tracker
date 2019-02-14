"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Drug extends Model {
  posts() {
    return this.belongsToMany("App/Models/Post");
  }
}

module.exports = Drug;
