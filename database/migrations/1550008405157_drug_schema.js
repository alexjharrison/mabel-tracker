"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DrugSchema extends Schema {
  up() {
    this.create("drugs", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table
        .integer("milligrams")
        .nullable()
        .unsigned();
      table
        .integer("daily_frequency")
        .nullable()
        .unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("drugs");
  }
}

module.exports = DrugSchema;
