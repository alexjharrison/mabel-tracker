"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MemoSchema extends Schema {
  up() {
    this.create("memos", table => {
      table.increments();
      table.string("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("memos");
  }
}

module.exports = MemoSchema;
