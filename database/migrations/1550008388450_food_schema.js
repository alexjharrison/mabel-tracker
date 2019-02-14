"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FoodSchema extends Schema {
  up() {
    this.create("foods", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("foods");
  }
}

module.exports = FoodSchema;
