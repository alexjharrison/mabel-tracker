"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SymptomSchema extends Schema {
  up() {
    this.create("symptoms", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("description").notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("symptoms");
  }
}

module.exports = SymptomSchema;
